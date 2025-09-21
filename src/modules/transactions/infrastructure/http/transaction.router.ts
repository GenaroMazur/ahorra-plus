import {Router} from "express";

const transactionRouter = Router({mergeParams: true});

// transactionRouter.route("/").post().get()
//
// transactionRouter.route("/:id").get().delete().patch()

export default transactionRouter;