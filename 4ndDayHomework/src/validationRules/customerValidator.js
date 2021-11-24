import RuleFor from "../crossCuttingConcerns/validation/validation.js";
import ValidationTool from "../helpers/validationTool.js";
import BaseValidator from "./baseValidator.js";
import UserValidator from "./userValidator.js";

export default class CustomerValidator extends BaseValidator{

    static validateRules(customer){
        let result =  ValidationTool.run([
            RuleFor.length(customer.creditCardNumber,16),
        ])
        result.push(...UserValidator.validateRules(customer))
        return result
       
    }

 
}