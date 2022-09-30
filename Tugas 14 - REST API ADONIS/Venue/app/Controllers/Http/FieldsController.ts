import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";

export default class FieldsController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const fields = await Database.from("fields")
        .select("name", "type", "venue_id")
        .where("venue_id", params.venue_id);

      response.ok({
        data: fields,
      });
    } catch (error) {
      response.badRequest({
        message: "Data fields tidak dapat ditampilkan",
      });
    }
  }

  public async store({ request, response, params }: HttpContextContract) {
    try {
      await Database.table("fields").insert({
        name: request.input("name"),
        type: request.input("type"),
        venue_id: params.venue_id,
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
      const fields = await Database.from("fields")
        .select("name", "type", "venue_id")
        .whereIn(["id", "venue_id"], [params.id, params.venue_id])
        .first();

      response.ok({
        data: fields,
      });
    } catch (error) {
      response.badRequest({
        message: "Data fields tidak dapat ditemukan",
      });
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      await Database.from("fields")
        .whereIn(["id", "venue_id"], [params.id, params.venue_id])
        .update({
          name: request.input("name"),
          type: request.input("type"),
          venue_id: request.input("venue_id"),
        });

      response.ok({
        message: "Data fields berhasil di Update",
      });
    } catch (error) {
      response.badRequest({
        message: "Data fields gagal di updater",
      });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      await Database.from("fields")
        .whereIn(["id", "venue_id"], [params.id, params.venue_id])
        .delete();

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
