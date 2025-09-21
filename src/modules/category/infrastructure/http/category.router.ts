import {Router} from "express";

const categoryRouter = Router({mergeParams: true});

categoryRouter.route("/").get().post()

categoryRouter.route("/:id").get().delete().patch()

export default categoryRouter;