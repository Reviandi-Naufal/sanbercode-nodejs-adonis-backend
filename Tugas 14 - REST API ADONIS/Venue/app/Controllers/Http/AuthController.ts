import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import UserValidator from "App/Validators/UserValidator";
import User from "App/Models/User";
import Hash from "@ioc:Adonis/Core/Hash";

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

  //   public async login({ request, response, auth }: HttpContextContract) {
  //     try {
  //       const email = request.input("email");
  //       const password = request.input("password");

  //       // Lookup user manually
  //       const user = await User.query()
  //         .where("email", email)
  //         .whereNull("is_deleted")
  //         .firstOrFail();

  //       // Verify password
  //       if (!(await Hash.verify(user.password, password))) {
  //         return response.unauthorized("Invalid credentials");
  //       }

  //       // Generate token
  //       const token = await auth.use("api").generate(user);
  //     } catch (error) {
  //       response.badRequest({
  //         message: "User baru gagal dibuat",
  //         error: error,
  //       });
  //     }
  //   }
}
