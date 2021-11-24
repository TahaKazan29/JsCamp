export default class BaseValidator{

  static validate(object){
    let errors = this.validateRules(object)
    return errors;
  }

}