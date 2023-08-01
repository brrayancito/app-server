import User from '../mongodb/models/userModel.js'
import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import sharp from 'sharp'

cloudinary.config({
  cloud_name: 'duvqjnz82',
  api_key: '763842538439912',
  api_secret: 'rHAdPD7aFyHPY1WvseF2-5jGkuE'
})

async function getAllUsers (req, res) {
  res.status(200).json({
    message: 'get all users'
  })
}

// Upload Photo
const multerStorage = multer.memoryStorage()

const multerFilter = (req, file, cb) => {
  // If file is not an image, run an ERROR
  if (!file.mimetype.startsWith('image')) {
    return cb(new Error('Not an image! Please upload only images'))
  }

  // If file is an image, continue
  cb(null, true)
}

const upload = multer({ storage: multerStorage, fileFilter: multerFilter })
const uploadPhoto = upload.single('photo')

// Resize Photo
async function resizePhoto (req, res, next) {
  if (!req.file) return next()

  req.file.filename = `photo-${Date.now()}.jpeg`

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`img/${req.file.filename}`)

  next()
};

// Create User
async function createUser (req, res) {
  try {
    if (await User.findOne({ email: req.body.email })) throw new Error('Email already exists')

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      avatar: req.body.avatar

    })

    res.status(200).json({
      status: 'success',
      data: {
        newUser
      }
    })
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message
    })
  }
}

// Get User
async function getUser (req, res) {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      })
    }

    res.status(200).json({
      status: 'success',
      user
    })
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error
    })
  }
}

export {
  getAllUsers,
  createUser,
  getUser,
  uploadPhoto,
  resizePhoto
}
