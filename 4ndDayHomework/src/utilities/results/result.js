export default class Result {

    constructor(success,message){
        this.success = success
        this.message = message
    }

     isSuccess(){
        return this.success
    }
  
     getMessage(){
        return this.message
    }
  
  
  
  }