import Property from '../mongodb/models/propertyModel.js'
import User from '../mongodb/models/userModel.js'

async function getAllProperties (req, res) {}
async function getProperty (req, res) {}
async function createProperty (req, res) {
  try {
    const { title, description, propertyType, price, location, photo } = req.body
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error
    })
  }
}
async function updateProperty (req, res) {}
async function deleteProperty (req, res) {}

export {
  getAllProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty
}
