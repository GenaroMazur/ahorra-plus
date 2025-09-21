import {Router} from "express";

const scheduleTransactionRoute = Router({mergeParams: true});

// scheduleTransactionRoute.route("/").get().post()
//
// scheduleTransactionRoute.route("/:id").get().patch().delete()

export default scheduleTransactionRoute;