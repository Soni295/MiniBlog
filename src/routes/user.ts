import { Router } from "express"
import { getUsers, postUser} from "../controllers/user"

const router = Router()

router
  .get("/", getUsers)
  .post("/", postUser)
  //.get("/:id", userCtrl.getUser)
  //.put("/:id", userCtrl.updateUser)
  //.delete("/:id", userCtrl.deleteUser)

export { router }
