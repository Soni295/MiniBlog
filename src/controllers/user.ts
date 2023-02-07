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

export const getUser = async(req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await User.findByPk(id)
    res.json(user)
  } catch(e){ handlerHttp(res, ERRORS.GET_USER) }
}

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

export const updateUser = async(req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, email, password } = req.body
    const currentUser = await User.findByPk(id)

    if (currentUser) {
      currentUser.name = name ? name : currentUser.name
      currentUser.email = email ? email : currentUser.email
      currentUser.password = password ? password : password
      await currentUser.save()
    }
    res.json(currentUser)
  } catch(e){ handlerHttp(res, ERRORS.UPDATE_USER) }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await User.destroy({ where: { id } })
    console.log(id)
    res.sendStatus(204)
  } catch(e){ handlerHttp(res, ERRORS.DELETE_USER) }
}
