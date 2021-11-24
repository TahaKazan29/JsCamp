export default class BaseLogger {
    
    info(data,message){
        console.info(`Default Logger : ${data} ${message}`)
    }

    warn(data,message){
        console.warn(`Default Logger : ${data} ${message}`)
    }

    error(data,message){
        console.error(`Default Logger : ${data} ${message}`)
    }

    success(data,message){
        console.log(`Default Logger : ${data} ${message}`)
    }
}