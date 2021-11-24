import { users } from "../data/users.js"

export default class UserDao{
    
    constructor(){
        this.users = users
    }

    getUsers(){
        return this.users
    }

    getUsersByType(type){
        return this.users.filter(user => user.type === type)
    }

    add(user){
        this.users.push(user)
        return user
    }

    getById(userId){
        return this.users.find(user => user.id == userId)
    }

    update(user){
      this.users.map(u => u.id !== user.id ? u : user);
    }

    delete(user){
      this.users.filter(u => u.id !== user.id)
    }

} 