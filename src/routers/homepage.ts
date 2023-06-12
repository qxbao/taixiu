import {Router} from "express";
const router = Router();

router.get("/", (req, res) => {
    res.render("home.pug");
});

router.get("/test", (req, res) => {
    res.render("test.pug");
});

export {router};