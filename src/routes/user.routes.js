import { Router } from 'express' 
import * as userController from '../controllers/user.controller'

const router = Router()

router.post('/', userController.postUser)
router.get('/', userController.getAllUser)
router.delete('/:id', userController.deletUSer)
router.get('/:email', userController.getEmailUser)

export default router;