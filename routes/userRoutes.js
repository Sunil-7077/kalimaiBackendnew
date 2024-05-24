import express from "express"
import {storeUser,getUser} from "../controllers/userController.js";

const userRouter= express.Router();

userRouter.route("/client").post(storeUser)
userRouter.route("/getuser").get(getUser)
//router.route("/paymentVarification").post(paymentVarification)

export default userRouter;