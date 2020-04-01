"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.application = express();
    }
}
const app = new App().application;
app.get("/", (req, res) => {
    res.send("start");
    let person = new Person("Chicken", "mini");
    console.log(person.getName());
});
app.listen(4000, () => console.log("start"));
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = null;
        this.fullName = firstName + " " + lastName;
    }
    getName() {
        return this.fullName;
    }
}
//# sourceMappingURL=app.js.map