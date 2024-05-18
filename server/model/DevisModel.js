import { Schema, model } from "mongoose";

const devisSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    adresse: {
      type: String,
      required: true,
    },
    typeClient: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    collection:'devis',
    timestamps:true
  }
);

const DevisModel = model('collection',devisSchema)

export default DevisModel