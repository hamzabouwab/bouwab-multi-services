import DevisModel from '../model/DevisModel.js';
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
import UserModel from '../model/UserModel.js';

config({path:'../.env'})

const newDevis = async (req, res) => {
	const { nom, prenom, email, tel, adresse, typeClient, message } = req.query;
	try {
		const newDevis = await DevisModel.create({
			nom: nom,
			prenom: prenom,
			email: email,
			tel: tel,
			adresse: adresse,
			typeClient: typeClient,
			message: message,
		});
		res.json(newDevis);
	} catch (err) {
		res.send(err);
	}
};


const getDevis = async (req, res) => {

	// const devis = await DevisModel.find({});
	// const token = jwt.sign(req.body,process.env.JWT_SECRET,{expiresIn:'40s',algorithm:'HS384'})
	const user = {email:'email',password:'password'}
	delete user.password
	res.json(user);
};



export {
	getDevis,
	newDevis
}