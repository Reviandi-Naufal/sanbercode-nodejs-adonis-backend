//import model
const { Venues } = require("../models");

class venuesController {
  // fungsi add new venue data
  static async addVenue(req, res) {
    try {
      let name = req.body.name;
      let address = req.body.address;
      let phone = req.body.phone;

      const newVenue = await Venues.create({
        name: name,
        address: address,
        phone: phone,
      });

      res.status(200).json({
        status: "success",
        message: "Data venue baru berhasil ditambahkan!",
      });
    } catch (error) {
      res.status(401).json({
        status: "fail",
        message: "Gagal menyimpan data",
        msg: error.errors.map((e) => e.message),
      });
    }
  }

  static async showVenue(req, res) {
    const venue = await Venues.findAll();

    res.status(200).json({
      status: "success",
      data: venue,
    });
  }

  static async showVenueById(req, res) {
    try {
      let idVenue = req.params.id;

      let dataVenue = await Venues.findByPk(idVenue);
      if (!dataVenue) {
        res.status(401).json({
          status: "failed",
          message: "Data tidak ditemukan",
        });
      }
      res.status(200).json({
        status: "Success",
        data: dataVenue,
      });
    } catch (error) {
      res.status(401).json({
        status: "failed",
        message: "Data gagal ditampilkan",
        msg: error,
      });
    }
  }

  static async updateVenue(req, res) {
    try {
      let name = req.body.name;

      await Venues.update(
        { name: name },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      res.status(200).json({
        status: "success",
        message: "Data berhasil di Update",
      });
    } catch (error) {
      res.status(401).json({
        status: "failed",
        message: "Data gagal update",
        msg: error,
      });
    }
  }

  static async deleteVenue(req, res) {
    try {
      await Venues.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.status(200).json({
        status: "Success",
        message: "Data Berhasil di Delete",
      });
    } catch (error) {
      res.status(401).json({
        status: "failed",
        message: "Data gagal di Delete",
        msg: error,
      });
    }
  }
}

module.exports = venuesController;
