import UserModel from "../model/UserModel.js"

const getUsers =async (req,res)=>{
	let user = await UserModel.findOne({}).then(res=>{
        return res.toObject()
    })
    if(!user){
       return res.json({message:'user inexistant'}).status(404)
    }
    delete user.password
	res.json(user).status(200)
}	
const createUser =async (req,res)=>{
	let user = await UserModel.create(req.body).then(res=>{
        
        res.save()
        delete res.password
        return res.toObject()
    })
    if(!user){
       return res.json({message:"erreur de créer ce compte"}).status(404)
    }
    delete user.password
	res.json(user).status(200)
}	

export {
    getUsers,
    createUser
}