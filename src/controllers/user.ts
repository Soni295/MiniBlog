import { Request, Response } from "express"
import User from "../models/user"
import {handlerHttp} from "../utils/error.handler"

const ERRORS = {
  GET_USER: "ERROR_GET_USER",
  GET_USERS: "ERROR_GET_USERS",
  UPDATE_USER: "ERROR_UPDATE_USER",
  POST_USER: "ERROR_POST_USER",
  DELETE_USER: "ERROR_DELETE_USER"
}
/*
export const getUser = (_: Request, res: Response) => {
  try {
    res.send("get One")
  } catch(e){ handlerHttp(res, ERRORS.GET_USER) }
}
*/

export const getUsers = async(_: Request, res: Response) => {
  try {
    const AllUsers = await User.findAll()
    res.json(AllUsers)
  } catch(e){ handlerHttp(res, ERRORS.GET_USERS) }
}

export const postUser = async (req: Request, res: Response) => {
  try {
    const {name, email, password} = req.body

    const NewUser = await User.create({
      name, email, password
    })
    res.json(NewUser)
  } catch(e){ handlerHttp(res, ERRORS.POST_USER) }
}

/*
export const updateUser = (req: Request, res: Response) => {
  try {
    res.send("update user")
  } catch(e){ handlerHttp(res, ERRORS.UPDATE_USER) }
}

export const deleteUser = (req: Request, res: Response) => {
  try {
    res.send("delete user")
  } catch(e){ handlerHttp(res, ERRORS.DELETE_USER) }
}
*/
