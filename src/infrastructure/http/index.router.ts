import {Router} from "express";
import userRoutes from "../../modules/user/infrastructure/http/user.routes";
import {tokenMiddleware} from "../../modules/token/infrastructure/http/token.middleware";

const indexRouter = Router();

indexRouter.get("/", (_, res) => {
    res.status(200).json({
        status: true,
        message: "Hello world",
        body: null,
    });
});

indexRouter.use("/auth", userRoutes)

indexRouter.use(tokenMiddleware)

export default indexRouter;
