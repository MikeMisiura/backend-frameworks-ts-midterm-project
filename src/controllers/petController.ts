import { Pet } from './../models/pet';
import { RequestHandler } from "express";

export const defaultPet: RequestHandler = (req, res, next) => {
    res.redirect('/pets');
}

export const allPets: RequestHandler = async (req, res, next) => {
    let petList: Pet[] = await Pet.findAll()

    res.render('allPets', {
        petList
    });
}

export const onePet: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let foundPet: Pet | null = await Pet.findByPk(petId);

    if (foundPet) {
        res.render('petDetail', { foundPet });
    } else {
        res.status(404).render('error', { message: "No pet found. Try hanging posters." })
    }
}

export const addPetPage: RequestHandler = (req, res, next) => {
    res.render('addPetPage');
}

export const createPet: RequestHandler = async (req, res, next) => {
    let newPet: Pet = req.body;
    await Pet.create(newPet);
    res.redirect('/pets')
}

export const editPetPage: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let foundPet: Pet | null = await Pet.findByPk(petId);

    if (foundPet) {
        res.render('editPetPage', { foundPet });
    } else {
        res.status(404).render('error', { message: "No pet found. Try hanging posters." })
    }
}

export const editPet: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let updatedPet: Pet = req.body;

    let updated = await Pet.update(updatedPet, {
        where: { petId: petId}
    })

    if (updated) {
        res.redirect(`/pets/${petId}`);
    } else {
        res.status(404).render('error', { 
            message: "Edit was unsuccessful. Please try again." 
        })
    }
}

export const deletePet: RequestHandler = async (req, res, next) => {
    let petId = req.params.petId;
    let deleted = await Pet.destroy({
        where: { petId: petId }
    })

    if (deleted) {
        res.redirect('/pets')
    } else {
        res.status(404).render('error', { message: "No pet found. Try hanging posters." })
    }

}