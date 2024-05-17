import DevisModel from "../model/DevisModel.js";

import { Router } from "express";
const DevisRouter = Router();
DevisRouter.get("/", (req, res) => {
  const devis = DevisModel.find({});
  res.json(devis);
});
DevisRouter.post("/", (req, res) => { 
  const { nom, prenom, email, tel, adresse, typeClient, message } = req.query;
  const newDevis = DevisModel.create({
    nom: nom,
    prenom: prenom,
    email: email,
    tel: tel,
    adresse: adresse,
    typeClient: typeClient,
    message: message,
  });
  newDevis
    .then((result) => {
      result.save();
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

export default DevisRouter;
