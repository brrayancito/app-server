import Express from 'express'

import { getAllUsers, getUser, createUser, uploadPhoto, resizePhoto } from '../controllers/userController.js'

const router = Express.Router()

router.route('/').get(getAllUsers)
router.route('/').post(uploadPhoto, resizePhoto, createUser)
router.route('/:id').get(getUser)

export default router
