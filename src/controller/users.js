const UsersModel = require('../models/users.js');

const getAllUsers = async (req, res) => {
  try {
    // expect success
    const [data] = await UsersModel.getAllUsers();

    console.log(data);

    res.status(200).json({
      message: 'Get all users',
      data: data,
    });
  } catch (error) {
    // handling error
    res.status(500).json({
      message: `Get all users Failed`,
      serverMessage: error,
    });
  }
};

const createUser = async (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.email ||
    !body.address ||
    !body.nip ||
    !body.institusi ||
    !body.fakultas ||
    !body.prodi
  ) {
    return res.status(400).json({
      message: 'Email, password, and name are required',
    });
  }

  try {
    // expect success
    await UsersModel.createUser(body);

    res.status(201).json({
      message: 'Create a user',
      data: body,
    });
  } catch (error) {
    // handling error
    res.status(500).json({
      message: `Create user Failed`,
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  try {
    await UsersModel.updateUser(body, id);

    res.status(201).json({
      message: 'Update a user Success',
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    // handling error
    res.status(500).json({
      message: `Update user Failed`,
      serverMessage: error,
    });
  }
};

const deletUser = async (req, res) => {
  const { id } = req.params;

  try {
    await UsersModel.deletUser(id);

    res.status(200).json({
      message: 'Delete a user Success',
      data: null,
    });
  } catch (error) {
    // handling error
    res.status(500).json({
      message: `Delet user Failed`,
      serverMessage: error,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await UsersModel.getUserById(id);

    // convert array to object
    const user = data[0][0];

    if (data.length === 0) {
      return res.status(404).json({
        message: `User with id ${id} not found`,
      });
    }

    res.status(200).json({
      message: 'Get user by id',
      data: user,
    });
  } catch (error) {
    // handling error
    res.status(500).json({
      message: `Get user by id Failed`,
      serverMessage: error,
    });
  }
};

const searchByName = async (req, res) => {
  const { name } = req.params;

  try {
    const [data] = await UsersModel.searchByName(name);

    if (data.length === 0) {
      return res.status(404).json({
        message: `User with name ${name} not found`,
      });
    }

    res.status(200).json({
      message: 'Search user by name',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: `Search user by name Failed`,
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deletUser,
  getUserById,
  searchByName,
};
