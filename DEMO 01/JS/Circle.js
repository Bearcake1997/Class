class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
    draw(elementID) {
        let canvas = document.getElementById(elementID);
        //canvas 
    }
}
class Person {
    constructor(name, birthDay, gender, email, tel, address) {
        this.name = name;
        this.birthDay = birthDay;
        this.gender = gender;
        this.email = email;
        this.tel = tel;
        this.address = address;
    }
}
class Student extends Person {
    constructor(name, birthDay, gender, email, tel, address, studentID){
        super(name, birthDay, gender, email, tel, address);
        this.studentID = studentID;
    }
}
    