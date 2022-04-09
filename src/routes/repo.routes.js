import { Router } from 'express' 
import * as gitRepoController from '../controllers/gitRepo.controller'

const router = Router()

router.post('/addRepo', gitRepoController.postRepo)
router.get('/listRepo', gitRepoController.getAllReports)
router.delete('/deleteRepo/:id', gitRepoController.deletRepoFav)


export default router;