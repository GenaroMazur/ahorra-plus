import {Router} from "express";

const indexRouter = Router();

indexRouter.get("/", (_, res) => {
    res.status(200).json({
        status: true,
        message: "Hello world",
        body: null,
    });
});

export default indexRouter;
