import DevisModel from "../model/DevisModel.js";

import { Router } from "express";
const DevisRouter = Router();
DevisRouter.get("/", (req, res) => {
  const devis = DevisModel.find({});
  res.json(devis);
});
DevisRouter.post("/",async (req, res) => { 
  const { nom, prenom, email, tel, adresse, typeClient, message } = req.query;
  try{
    const newDevis =await DevisModel.create({
      nom: nom,
      prenom: prenom,
      email: email,
      tel: tel,
      adresse: adresse,
      typeClient: typeClient,
      message: message,
    });
    res.json(newDevis);
  }catch(err){
      res.send(err);
    };
});

export default DevisRouter;
