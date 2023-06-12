import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { routeController } from "./routers/controller";
import {join} from "path";

dotenv.config();
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "/views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(join(__dirname, "/assets")));

routeController(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server launched and is accessible at http://localhost:${port}`);
});