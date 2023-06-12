import {Express} from "express";
import {router as homeRouter} from "./homepage";

const controller = (app:Express):void => {
    app.use("/", homeRouter);
};

export {controller as routeController};