const moment = require('moment-timezone');
const IjinModel = require('../models/ijin.js');

const getAllSuratIjin = async (req, res) => {
  try {
    // expect success
    const [data] = await IjinModel.getAllSuratIjin();

    // Memperbarui tanggal dengan mengonversi ke zona waktu yang diinginkan
    const updatedData = data.map((ijin) => {
      const formattedStart = moment(ijin.start).format('YYYY-MM-DD');
      const formattedEnd = moment(ijin.end).format('YYYY-MM-DD');

      return {
        ...ijin,
        start: formattedStart,
        end: formattedEnd,
      };
    });

    res.status(200).json({
      message: 'Get all Surat Ijin',
      data: updatedData,
    });
  } catch (error) {
    // handling error
    res.status(500).json({
      message: `Get all surat ijin Failed`,
      serverMessage: error,
    });
  }
};

const ijinDropDown = async (req, res) => {
  try {
    // expect success
    const [data] = await IjinModel.ijinDropDown();

    console.log('masuk sini');

    res.status(200).json({
      message: 'Get dropdown ijin',
      data: data,
    });
  } catch (error) {
    // handling error
    console.log('masuk situ');

    res.status(500).json({
      message: `Get dropdown ijin Failed`,
      serverMessage: error,
    });
  }
};

const getIjinById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await IjinModel.getIjinById(id);

    // convert array to object
    const ijin = data[0][0];

    if (data.length === 0) {
      return res.status(404).json({
        message: `Surat Ijin with id ${id} not found`,
      });
    }

    // Mengubah tanggal ke zona waktu yang diinginkan
    const formattedStart = moment(ijin.start).format('YYYY-MM-DD');
    const formattedEnd = moment(ijin.end).format('YYYY-MM-DD');

    // Memperbarui properti tanggal dengan tanggal yang sudah sesuai
    ijin.start = formattedStart;
    ijin.end = formattedEnd;

    res.status(200).json({
      message: 'Get Surat Ijin by id success',
      data: ijin,
    });
  } catch (error) {
    // handling error
    res.status(500).json({
      message: `Get Surat Ijin by id Failed`,
      serverMessage: error,
    });
  }
};

module.exports = { getAllSuratIjin, ijinDropDown, getIjinById };
