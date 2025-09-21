import {Router} from "express";

const goalRouter = Router({mergeParams: true});

goalRouter.route("/").get().post()

goalRouter.route("/:id").get().patch().delete()

export default goalRouter;