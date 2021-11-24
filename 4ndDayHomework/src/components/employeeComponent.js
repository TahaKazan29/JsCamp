import Employee from "../models/employee.js"
import ElasticLoger from "../crossCuttingConcerns/loggers/elasticLogger.js"
import EmployeeService from "../services/employeeService.js"
import EmployeeDao from "../dataAccess/employeeDao.js"
import { SortEnum } from "../helpers/sort.js"


console.log("--------- Employee Component ------------")


let employeeService = new EmployeeService(new EmployeeDao(),new ElasticLoger())
console.log(employeeService.getEmployees())

let newEmployee = new Employee({id:15,firstName:"Fatih",lastName:"Kapar",city:"Konya",age:22,salary:4000})
console.log(newEmployee,"newE")
let addedEmployee = employeeService.add(newEmployee)
// console.log(newEmployee)

let sortedList = employeeService.getEmployeeSorted('firstName',SortEnum.asc)
console.log(sortedList)


// console.log(employeeService.getEmployees())




