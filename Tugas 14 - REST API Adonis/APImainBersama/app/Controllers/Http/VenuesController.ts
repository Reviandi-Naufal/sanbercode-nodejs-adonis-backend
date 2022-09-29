import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class VenuesController {
  public async addVenue({ request, response }: HttpContextContract) {
    try {
      /**
       * Schema definition
       */
      const newVenueSchema = schema.create({
        name: schema.string(),
        address: schema.string(),
        phone: schema.string([
          rules.mobile({
            locale: ["id-ID"],
          }),
        ]),
      });

      /**
       * Validate request body against the schema
       */
      const values = await request.validate({ schema: newVenueSchema });

      response.ok({
        message: values,
      });
    } catch (error) {
      response.badRequest(error.messages);
    }
  }

  public async addBooking({ request, response }: HttpContextContract) {
    try {
      /**
       * Schema definition
       */
      const newBookingSchema = schema.create({
        name: schema.string(),
        venue: schema.string(),
        booking: schema.date(
          {
            format: "dd-MM-yyyy HH:mm:ss",
          },
          [rules.before("today")]
        ),
      });

      /**
       * Validate request body against the schema
       */
      const values = await request.validate({ schema: newBookingSchema });

      response.ok({
        message: values,
      });
    } catch (error) {
      response.badRequest(error.messages);
    }
  }
}
