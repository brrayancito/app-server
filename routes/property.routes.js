import Express from 'express'

import {
  getAllProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty
} from '../controllers/propertyController.js'

const router = Express.Router()

router.route('/').get(getAllProperties)
router.route('/:id').get(getProperty)
router.route('/').post(createProperty)
router.route('/:id').patch(updateProperty)
router.route('/:id').delete(deleteProperty)

export default router
