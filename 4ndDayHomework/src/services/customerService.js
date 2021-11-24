import Sorted from "../helpers/sorted.js"
import SuccessDataResult from "../utilities/results/successDataResult.js"
import CustomerValidator from "../validationRules/customerValidator.js"
import BaseService from "./baseService.js"


export default class CustomerService extends BaseService{
    
    constructor(customerDao,loggerService){
        super()
        this.customerDao = customerDao
        this.loggerService = loggerService
    }

    getCustomers(){
        const customers = this.customerDao.getCustomers()
        return new SuccessDataResult(customers)
    }

    add(customer){
        let validationErrors = CustomerValidator.validate(customer)
        if(validationErrors.length > 0){
            this.loggerService.error(customer,'Validation error occurred while adding customer')
            return validationErrors
        }
        const addedCustomer = this.customerDao.add(customer)
        this.loggerService.success(customer,'customer added')
        return new SuccessDataResult(addedCustomer)
    }

    update(customer){
        let validationErrors = CustomerValidator.validate(customer)
        if(validationErrors.length > 0){
            this.loggerService.error(customer,'Validation error occurred while updating customer')
            return validationErrors
        }
        this.customerDao.update(customer)
        this.loggerService.success(customer,'customer updated')
        return new SuccessDataResult()
    }

    delete(customer){
        this.customerDao.delete(customer)
        this.loggerService.success(customer,'customer deleted')
        return new SuccessDataResult()
    }

    getCustomerSorted(valueToSort,sortEnum) {
        let customers = this.customerDao.getCustomers()
        return new SuccessDataResult(Sorted.sort(customers, sortEnum, valueToSort))
    }

} 