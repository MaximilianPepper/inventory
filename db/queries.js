const pool = require("./pool");

async function getAllFamilies() {
  const { rows } = await pool.query("SELECT * FROM families");
  return rows;
}
async function getAllGroups() {
  const { rows } = await pool.query("SELECT * FROM groups");
  return rows;
}
async function getAllInstruments() {
  const { rows } = await pool.query("SELECT * FROM instruments");
  return rows;
}

async function insertFamily(name) {
  await pool.query("INSERT INTO families (name) VALUES ($1)", [name]);
}

module.exports = {
  getAllFamilies,
  getAllGroups,
  getAllInstruments,
  insertFamily,
};
