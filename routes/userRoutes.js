import express from "express"
import {storeUser,getUser} from "../controllers/userController.js";

const router= express.Router();

router.route("/client").post(storeUser)
router.route("/getuser").get(getUser)
//router.route("/paymentVarification").post(paymentVarification)

export default router;