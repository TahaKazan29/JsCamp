import RuleFor from "../crossCuttingConcerns/validation/validation.js";
import ValidationTool from "../helpers/validationTool.js";
import BaseValidator from "./baseValidator.js";
import UserValidator from "./userValidator.js";

export default class EmployeeValidator extends BaseValidator{

    static validateRules(employee){
        let result =  ValidationTool.run([
            RuleFor.isNumber(employee.salary),
        ])
        result.push(...UserValidator.validateRules(employee))
        return result
       
    }

 
}