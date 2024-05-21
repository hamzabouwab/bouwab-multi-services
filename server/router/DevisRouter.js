import { Router } from "express";
import { getDevis, newDevis } from "../controllers/devisController.js";
import authToken from "../middleware/auth.js";


const DevisRouter = Router();
const UserRouter = Router();

DevisRouter.get("/", getDevis);
DevisRouter.post("/",authToken,newDevis);

export default DevisRouter;
