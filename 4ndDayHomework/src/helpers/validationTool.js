export default class ValidationTool {

  static run(validators) {
    let validationErrors = []
    for (const result of validators) {
        if (!result.success) {
          validationErrors.push(result)
        }
    }
    return validationErrors;
}

}