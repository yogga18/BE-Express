const dbPool = require('../config/database');

const getAllSuratIjin = () => {
  const SQLQuery =
    'SELECT id, judul, name, nip, keterangan, category, start, end FROM ijin';

  return dbPool.execute(SQLQuery);
};

const ijinDropDown = () => {
  const SQLQuery = 'SELECT label, value FROM ijin_select';

  return dbPool.execute(SQLQuery);
};

const getIjinById = (id) => {
  const SQLQuery =
    'SELECT id, judul, name, nip, keterangan, category, start, end FROM ijin WHERE id = ?';
  const value = [id];

  return dbPool.execute(SQLQuery, value);
};

module.exports = { getAllSuratIjin, ijinDropDown, getIjinById };
