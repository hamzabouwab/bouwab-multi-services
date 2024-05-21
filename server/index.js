/* eslint-disable @typescript-eslint/no-var-requires */


import {default as express} from "express";
import DevisRouter from "./router/DevisRouter.js"; 
import cors from "cors";
import { config } from "dotenv";
import { default as mongoose } from "mongoose";
import UserRouter from "./router/UserRouter.js";

config({ path: "./.env" }); 

const app = express(); 
 
app.use(express.json());

app.use(cors());


const { PORT, database_string } = process.env;

const Port = PORT || 3002; 
app.use("/devis", DevisRouter); 
app.use("/user", UserRouter); 
app.listen(Port, () => {
  console.log(`server is running on port :${Port}`);
});
mongoose.connect(database_string,{dbName:'concours'}).catch(err=>{
  console.log(err)
}); 
mongoose.connection.on("connected", () => {
  console.log("connected successfully");
});
mongoose.connection.on("error", (e) => {
  console.log(`connection error ${e}`);
});
