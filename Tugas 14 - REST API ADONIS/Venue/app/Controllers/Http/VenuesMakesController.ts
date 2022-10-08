import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
// import Database from "@ioc:Adonis/Lucid/Database";
import Venue from "App/Models/Venue";

export default class VenuesMakesController {
  public async index({ response }: HttpContextContract) {
    try {
      // Use query builder
      // const venues = await Database.from("venues").select(
      //   "name",
      //   "address",
      //   "phone"
      // );

      // Use lucid ORM
      const venues = await Venue.all();

      response.ok({
        message: "Data venue berhasil ditampilkan",
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
      // Using query builder
      // await Database.table("venues") // 👈 gives an instance of insert query builder
      //   .insert({
      //     name: request.input("name"),
      //     address: request.input("address"),
      //     phone: request.input("phone"),
      //   });

      // Using lucid ORM
      const newVenue = await Venue.create({
        name: request.input("name"),
        address: request.input("address"),
        phone: request.input("phone"),
      });

      response.ok({
        message: "Data berhasil di input",
        data: newVenue,
      });
    } catch (error) {
      response.badRequest({
        message: "Data gagal di input",
      });
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      // Use query builder
      // const venue = await Database.from("venues")
      //   .select("name", "address", "phone")
      //   .where("id", params.id)
      //   .first();

      // Using lucid ORM
      const findVenue = await Venue.find(params.id);

      response.ok({
        data: findVenue,
      });
    } catch (error) {
      response.badRequest({
        message: "Data Venue tidak dapat ditemukan",
      });
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      // Using query builder
      // await Database.from("venues")
      //   .where("id", params.id)
      //   .update({
      //     name: request.input("name"),
      //     email: request.input("address"),
      //     phone: request.input("phone"),
      //   });

      // Using lucid ORM
      const updateVenue = await Venue.findOrFail(params.id);
      updateVenue.name = request.input("name"); // Luxon dateTime is used

      await updateVenue.save();

      response.ok({
        message: "Data berhasil di Update",
        data: updateVenue,
      });
    } catch (error) {
      response.badRequest({
        message: "Data Venue gagal di updater",
      });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      // Using query builder
      // await Database.from("venues").where("id", params.id).delete();

      // Using lucid ORM
      const deletedVenue = await Venue.findOrFail(params.id);
      await deletedVenue.delete();

      response.ok({
        message: "Data Berhasil di Delete",
        data: deletedVenue,
      });
    } catch (error) {
      response.badRequest({
        message: "Data Venue tidak dapat ditemukan",
      });
    }
  }
}
