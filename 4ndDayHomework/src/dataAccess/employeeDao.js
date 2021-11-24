import { users } from "../data/users.js"

export default class EmployeeDao{
    
    constructor(){
        this.employees = this.load()
    }

    load(){
        return users.filter(user => user.type === "employee")
    }

    getEmployees(){
        return this.employees
    }

    add(employee){
        return this.employees.push(employee)
    }

    getById(employeeId){
        return this.employees.find(employee => employee.id == employeeId)
    }

    update(employee){
      this.users.map(e => e.id !== employee.id ? e : employee);
    }

    delete(employee){
      this.users.filter(e => e.id !== employee.id)
    }

} 