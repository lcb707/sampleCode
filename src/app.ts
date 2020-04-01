import * as express from "express"

class App {
  public application : express.Application;
  constructor(){
    this.application = express();
  }
}
const app = new App().application;
app.get("/",(req : express.Request , res : express.Response) =>{

  res.send("start");
  let person: Person = new Person("ChangBok", "Lee");
    console.log(person.getName()); 
})
app.listen(4000,()=>console.log("start"));


class Person {
    private fullName: String = null;
    constructor(private firstName: String, private lastName: String) {
    this.fullName = firstName + " " + lastName;
    }
    public getName(): String{
    return this.fullName;
    }
}