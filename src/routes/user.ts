import { Router } from "express"
import { getUsers, getUser, postUser, deleteUser, updateUser } from "../controllers/user"

const router = Router()
  .get("/:id", getUser)
  .get("/", getUsers)
  .post("/", postUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser)

export { router }
