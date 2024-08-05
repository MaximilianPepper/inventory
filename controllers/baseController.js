const db = require("../db/queries");

const getAllFamilies = async (req, res) => {
  const families = await db.getAllFamilies();
  res.render("index", {
    title: "Musical Instruments",
    families: families,
  });
};

module.exports = { getAllFamilies };
