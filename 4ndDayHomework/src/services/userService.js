import { users } from "../data/users.js"
import Sorted from "../helpers/sort.js"
import SuccessDataResult from "../utilities/results/successDataResult.js"
import UserValidator from "../validationRules/userValidator.js"
import BaseService from "./baseService.js"


export default class UserService extends BaseService{
    
    constructor(userDao,loggerService){
        super()
        this.userDao = userDao
        this.loggerService = loggerService
    }

    getUsers(){
        const users = this.userDao.getUsers()
        return new SuccessDataResult(users)
    }

    add(user){
        let validationErrors = UserValidator.validate(user)
        if(validationErrors.length > 0){
            this.loggerService.error(user,'Validation error occurred while adding user')
            return validationErrors 
        }
        const addedUser = this.userDao.add(user)
        this.loggerService.success(user,'user added')
        return new SuccessDataResult(addedUser)
    }

    update(user){
        let isValid = UserValidator.validate(user)
        if(isValid.length > 0){
            this.loggerService.error(user,'Validation error occurred while updating user')
            return isValid 
        }
        this.userDao.update(user)
        this.loggerService.success(user,'user updated')
        return new SuccessDataResult(user)
    }

    delete(user){
        this.userDao.delete(user)
        return new SuccessDataResult(deletedUser)
    }

    getUsersSorted(valueToSort,sortEnum) {
        let users = this.userDao.getUsers()
        return new SuccessDataResult(Sorted.sort(users, sortEnum, valueToSort))
    }

} 