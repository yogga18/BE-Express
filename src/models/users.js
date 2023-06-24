const dbPool = require('../config/database');

const getAllUsers = () => {
  const SQLQuery =
    'SELECT id, name, nip, institusi, fakultas, prodi, email, address, gender, active FROM users';

  return dbPool.execute(SQLQuery);
};

const createUser = (body) => {
  //   const SQLQuery = `INSERT INTO users (name, email, address) VALUES ('${body.name}', '${body.email}', '${body.address}')`;

  //   return dbPool.execute(SQLQuery);

  // Code diatas rentan terhadap SQL injection maka dari itu untuk menghindari SQL injection kita dapat melakukan hal ini

  const SQLQuery =
    'INSERT INTO users (name, nip, institusi, fakultas, prodi, email, address, gender, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    body.name,
    body.nip,
    body.institusi,
    body.fakultas,
    body.prodi,
    body.email,
    body.address,
    body.gender,
    body.active,
  ];

  return dbPool.execute(SQLQuery, values);
};

const updateUser = (body, id) => {
  const SQLQuery =
    'UPDATE users SET name = ?, nip = ?, institusi = ?, fakultas = ?, prodi = ?, email = ?, address = ?, gender = ?, active = ? WHERE id = ?';
  const values = [
    body.name,
    body.nip,
    body.institusi,
    body.fakultas,
    body.prodi,
    body.email,
    body.address,
    body.gender,
    body.active,
    id,
  ];

  return dbPool.execute(SQLQuery, values);
};

const deletUser = (id) => {
  const SQLQuery = 'DELETE FROM users WHERE id = ?';
  const values = [id];

  return dbPool.execute(SQLQuery, values);
};

const getUserById = (id) => {
  const SQLQuery = 'SELECT * FROM users WHERE id = ?';
  const values = [id];

  return dbPool.execute(SQLQuery, values);
};

const searchByName = (name) => {
  // SELECT * FROM users WHERE name = "Aditya";
  const SQLQuery = 'SELECT * FROM users WHERE name = ?';
  const values = [name];

  return dbPool.execute(SQLQuery, values);
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deletUser,
  getUserById,
  searchByName,
};
