import User from "../models/user.js"
import UserService from "../services/userService.js"
import UserDao from "../dataAccess/userDao.js"
import MongoLogger from "../crossCuttingConcerns/loggers/mongoLogger.js"
import { SortEnum } from "../helpers/sort.js"


console.log("--------- User Component ------------")


let userService = new UserService(new UserDao(),new MongoLogger())
console.log(userService.getUsers())

let newUser = userService.add(new User(12,"Burak","Kalaylı","Konya",23))

let sortedList = userService.getUsers('firstName',SortEnum.asc)
console.log(sortedList)

