import { users } from "../data/users.js"

export default class CustomerDao{
    
    constructor(){
        this.customers = this.load()
    }

    load(){
        return users.filter(user => user.type === "customer")
    }

    getCustomers(){
        return this.customers
    }

    add(customer){
        this.customers.push(customer)
        return customer;
    }

    getById(customerId){
        return this.customers.find(customer => customer.id == customerId)
    }

    update(customer){
      this.users.map(c => c.id !== customer.id ? c : customer);
    }

    delete(customer){
      this.users.filter(c => c.id !== customer.id)
    }

} 