import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({path:'../.env'});

const authToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.json(err.message).sendStatus(403); 
    } 
    next();
  });
};

export default authToken;
