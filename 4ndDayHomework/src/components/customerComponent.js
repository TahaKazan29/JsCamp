import Customer from "../models/customer.js"
import CustomerService from "../services/customerService.js"
import CustomerDao from "../dataAccess/customerDao.js"
import ElasticLoger from "../crossCuttingConcerns/loggers/elasticLogger.js"
import { SortEnum } from "../helpers/sort.js"


console.log("--------- Customer Component ------------")


let customerService = new CustomerService(new CustomerDao(),new ElasticLoger())
console.log(customerService.getCustomers())

let newCustomer = new Customer({id:15,lastName:"Koçak",city:"Konya",age:22,creditCardNumber:"2323"})
console.log(newCustomer,"newC")
let addedCUstomer = customerService.add(newCustomer)
// console.log(newCustomer)

let sortedList = customerService.getCustomerSorted('firstName',SortEnum.asc)
console.log(sortedList)

// console.log(customerService.getCustomers())



