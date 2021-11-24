import ErrorDataResult from '../../utilities/results/errorDataResult.js'
import SuccessDataResult from '../../utilities/results/successDataResult.js'

export default class RuleFor{

     
    static minimumLength(field,length){
        let nullCheck = this.notEmpty(field)
        if(nullCheck.isSuccess()){
            if(!field.length >= length){
                return new ErrorDataResult(field,`${field} must be at least ${length} characters long`)
            }
            return new SuccessDataResult()
        }
        return nullCheck
    }

    static maximumLength(field,length){
        let nullCheck = this.notEmpty(field)
        if(nullCheck.isSuccess()){
            if(!field.length <= length){
                return new ErrorDataResult(field,`${field}  must be a maximum of ${length} characters long`)
            }
            return new SuccessDataResult()
        }
        return nullCheck
    }

    static length(field,length){
        let nullCheck = this.notEmpty(field)
        if(nullCheck.isSuccess()){
            if(!(field.length === length)){
              return new ErrorDataResult(field,`${field} must be ${length} characters long`)
            }
            return new SuccessDataResult()
        }
        return nullCheck
    }

    static greaterThan(field,valueToCompare){
        if(!(field > valueToCompare)){
            return new ErrorDataResult(field,`${field} must be greater than ${valueToCompare}`)
        }
        return new SuccessDataResult()
    }

    static greaterThanOrEqualTo(field,valueToCompare){
        if(!(field >= valueToCompare)){
            return new ErrorDataResult(field,`${field} must be a value of ${valueToCompare} or greater`)
        }
        return new SuccessDataResult()
    }

    static notEmpty(field){
        if(field === null || field === undefined || field === ""){
            return new ErrorDataResult(field,`${field} cannot be empty `)
        }
        return new SuccessDataResult()
    }

    static isNumber(field){
        if(!Number.isInteger(field)){
            return new ErrorDataResult(field,`${field} must be a numeric value`)
        }
        return new SuccessDataResult()
    }


}