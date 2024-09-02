import express from "express";
import { v4 as uuidv4 } from "uuid";
import { getID ,getUser ,addUser,deleteUser,updateUser } from "../controllers/users.js";
const router = express.Router();

// router.use(express.json());


// all the users in here starts with the /users
router.get("/",getUser);

router.post("/", addUser);

router.get("/:id",getID);

router.delete("/:id",deleteUser);

router.patch("/:id", updateUser);
export default router;
