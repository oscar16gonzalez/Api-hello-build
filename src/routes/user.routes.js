import { Router } from 'express' 
import * as userController from '../controllers/user.controller'
import * as gitRepoController from '../controllers/gitRepo.controller'

const router = Router()

router.post('/', userController.postUser)
router.get('/', userController.getAllUser)
router.get('/:id', userController.getOneUser)
router.delete('/:id', userController.deletUSer)

router.post('/repo', gitRepoController.postRepo)


export default router;