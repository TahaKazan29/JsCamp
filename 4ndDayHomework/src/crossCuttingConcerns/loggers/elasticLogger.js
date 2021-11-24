import BaseLogger from './baseLogger.js'

export default class ElasticLogger extends BaseLogger{

    info(data,message){
        console.info(`Mongo logger : ${data} ${message}`)
    }

    warn(data,message){
        console.warn(`Mongo logger :  ${data} ${message}`)
    }

    error(data,message){
        console.error(`Mongo logger :  ${data} ${message}`)
    }

    success(data,message){
        console.log(`Mongo logger :  ${data} ${message}`)
    }
    
}