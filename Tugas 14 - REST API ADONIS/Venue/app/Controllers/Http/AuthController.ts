import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import UserValidator from "App/Validators/UserValidator";
import User from "App/Models/User";

/**
 * @swagger
 * /api/users:
 * post:
 *  tags:
 *    - Register
 *  summary: For new user to do registration
 *  requestBody:
 *    required: true
 *    content:
 *      application/x-www-form-urlencoded:
 *        description: User payload
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              example: 'James Bond'
 *              required: true
 *            email:
 *              type: string
 *              example: 'Bond007@example.com'
 *              required: true
 *            password:
 *              type: string
 *              example: 'asdsfijh@1234312'
 *              required: true
 *  produces:
 *    - application/json
 *  responses:
 *    200:
 *      description: Success
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 */

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    try {
      const data = await request.validate(UserValidator);

      const newUser = await User.create(data);

      return response.ok({
        messages: "Berhasil membuat user baru",
        data: newUser,
      });
    } catch (error) {
      response.badRequest({
        message: "User baru gagal dibuat",
        error: error,
      });
    }
  }

  public async login({ request, response, auth }: HttpContextContract) {
    try {
      const userSchema = schema.create({
        email: schema.string(),
        password: schema.string(),
      });
      await request.validate({ schema: userSchema });

      const email = request.input("email");
      const password = request.input("password");

      const token = await auth.use("api").attempt(email, password);

      return response.ok({
        messages: "Berhasil Login",
        token,
      });
    } catch (error) {
      response.badRequest({
        message: "Gagal login",
        error: error,
      });
    }
  }
}
