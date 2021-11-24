import Sorted from "../helpers/sort.js"
import SuccessDataResult from "../utilities/results/successDataResult.js"
import EmployeeValidator from "../validationRules/employeeValidator.js"
import BaseService from "./baseService.js"


export default class EmployeeService extends BaseService {

    constructor(employeeDao, loggerService) {
        super()
        this.employeeDao = employeeDao
        this.loggerService = loggerService
    }

    getEmployees() {
        const employees = this.employeeDao.getEmployees()
        return new SuccessDataResult(employees)
    }

    add(employee) {
        let validationErrors = EmployeeValidator.validate(employee)
        if (validationErrors.length > 0) {
            this.loggerService.error(employee, 'Validation error occurred while adding employee')
            return validationErrors
        }
        const addedEmployee = this.employeeDao.add(employee)
        this.loggerService.success(employee, 'employee added')
        return new SuccessDataResult(addedEmployee)
    }

    update(employee) {
        let validationErrors = EmployeeValidator.validate(employee)
        if (validationErrors.length > 0) {
            this.loggerService.error(employee, 'Validation error occurred while updating employee')
            return validationErrors
        }
        this.employeeDao.update(employee)
        this.loggerService.success(employee, 'employee updated')
        return new SuccessDataResult()
    }

    delete(employee) {
        this.employeeDao.delete(employee)
        return new SuccessDataResult()
    }

    getEmployeeSorted(valueToSort,sortEnum) {
        let employees = this.employeeDao.getEmployees()
        return new SuccessDataResult(Sorted.sort(employees, sortEnum, valueToSort))
    }

}