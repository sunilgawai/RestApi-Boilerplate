import express from "express";
import { APP_PORT, DB_URL } from "./config";
import mongoose from "mongoose";
import router from "./routes";
import { errorHandler } from "./middlewares";

// DataBase Connection.
mongoose.connect(DB_URL, {useNewUrlParser: true})
.then(()=> console.log(`connected to database...`))
.catch(err => console.log(`an error occured connecting to database, ${err}`))


// init.
const app = express();

// Middlewares init...
app.use(express.json());



// Routes init...
app.use(router);



// Error Handler init...
app.use(errorHandler);

app.listen(APP_PORT, ()=> console.log(`running on http://localhost:${APP_PORT}`))