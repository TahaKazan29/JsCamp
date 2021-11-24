import RuleFor from "../crossCuttingConcerns/validation/validation.js";
import ValidationTool from "../helpers/validationTool.js";
import BaseValidator from "./baseValidator.js";

export default class UserValidator extends BaseValidator {

    static validateRules(user){
        return ValidationTool.run([
            RuleFor.isNumber(user.id),
            RuleFor.isNumber(user.age),
            RuleFor.greaterThan(user.age,18),
            RuleFor.notEmpty(user.firstName),
            RuleFor.notEmpty(user.lastName),
            RuleFor.notEmpty(user.city),
            RuleFor.minimumLength(user.firstName,2),
            RuleFor.maximumLength(user.lastName,20)
        ])
    }
}