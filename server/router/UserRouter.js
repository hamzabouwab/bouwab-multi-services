import {Router} from 'express'
import {createUser, getUsers} from '../controllers/UserController.js'
const UserRouter = Router()

UserRouter.get('/',getUsers)
UserRouter.post('/',createUser)

export default UserRouter