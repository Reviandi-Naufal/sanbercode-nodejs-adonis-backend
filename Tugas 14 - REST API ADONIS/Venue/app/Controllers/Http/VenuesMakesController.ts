import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";

export default class VenuesMakesController {
  public async index({ response }: HttpContextContract) {
    try {
      const venues = await Database.from("venues").select(
        "name",
        "address",
        "phone"
      );

      response.ok({
        data: venues,
      });
    } catch (error) {
      response.badRequest({
        message: "Data venue tidak dapat ditampilkan",
      });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      await Database.table("venues") // 👈 gives an instance of insert query builder
        .insert({
          name: request.input("name"),
          address: request.input("address"),
          phone: request.input("phone"),
        });

      response.ok({
        message: "Data berhasil di input",
      });
    } catch (error) {
      response.badRequest({
        message: "Data gagal di input",
      });
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const venue = await Database.from("venues")
        .select("name", "address", "phone")
        .where("id", params.id)
        .first();

      response.ok({
        data: venue,
      });
    } catch (error) {
      response.badRequest({
        message: "Data Venue tidak dapat ditemukan",
      });
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      await Database.from("venues")
        .where("id", params.id)
        .update({
          name: request.input("name"),
          email: request.input("address"),
          phone: request.input("phone"),
        });

      response.ok({
        message: "Data berhasil di Update",
      });
    } catch (error) {
      response.badRequest({
        message: "Data Venue gagal di updater",
      });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      await Database.from("venues").where("id", params.id).delete();

      response.ok({
        message: "Data Berhasil di Delete",
      });
    } catch (error) {
      response.badRequest({
        message: "Data Venue tidak dapat ditemukan",
      });
    }
  }
}
