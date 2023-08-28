import { Router } from 'express';
import { addPetPage, allPets, deletePet, createPet, onePet, editPet, editPetPage } from '../controllers/petController';

const router = Router();

router.get('/', allPets);

router.get('/new', addPetPage);

router.post('/new', createPet);

router.get('/edit/:petId', editPetPage);

router.post('/edit/:petId', editPet);

router.post('/delete/:petId', deletePet);

router.get('/:petId', onePet);


export default router;