// let a: string;
// let b:number;
// let c: boolean;
// let d: any;//dinamik tip (string, int veya bool)
// a = "Hello World";
// b = 22;
// c = true;
// d = 25
// console.log(a, b, c, d);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///////////////////////////////////////////////////////////////
// let langs: string[];
// let numbers: number[];
// let boolValues: Array<boolean>;
// let a: Array<number>=[1,2,3,4,5,6,7];
// langs = ["Php", "Java", "C++", "Python"];
// numbers = [1,2,3,4,5];
// boolValues = [true, false, false];
// console.log(...langs);
// console.log(...numbers);
// console.log(...boolValues);
// console.log(...a);
//////////////////////////////////////////////////
// function addNumbers(num1: number, num2?:number=100):number{    
//     if(typeof num2 === "undefined"){
//         return num1;
//     }   
//     return num1 + num2;
// }
// console.log(addNumbers(10));
// console.log(addNumbers(10,20));
//////////////////////////////////////////////////////
// function addNumbers(num1:number, num2:number):void{
//     console.log(num1 + num2);
//     return;
// }
// addNumbers(10,20);
/////////////////////////////////////////////////////////////////////
// class Person{
//     name: string;
//     age: number;
//     phone: string;
//     constructor(name:string, age:number, phone: string){
//         this.name = name;
//         this.age = age;
//         this.phone = phone;
//         console.log("Kişi oluşturuldu");
//     }
//     showInfos(){
//         console.log(`İsim: ${this.name} Yaş: ${this.age} Tel: ${this.phone}`);
//     }
// }
// class Employee extends Person{
//     salary: number;
//     constructor(name: string, age: number, phone:string, salary: number) {
//         super(name, age, phone);
//         this.salary = salary;
//     }
//     showInfos(){
//         super.showInfos();
//         console.log("Maaş: " + this.salary);
//     }
//     changeDepartment(){
//         console.log("Departman Değiştiriliyor...");
//     }
// }
// let employee1 = new Employee("Ercan Demir", 28, "541", 1500);
// employee1.showInfos();
// employee1.changeDepartment();
//////////////////////////////////////////////////////////////////////////////////////
// interface IDatabase{
//     add();
//     get();
//     delete();
//     update();
// }
// class MySql implements IDatabase{
//     add(){
//         console.log("Mysql Add");
//     }
//     get(){
//         console.log("Mysql Get");
//     }
//     delete(){
//         console.log("Mysql Delete");
//     }
//     update(){
//         console.log("Mysql Update");
//     }
// }
// class MongoDb implements IDatabase{
//     add(){
//         console.log("MongoDb Add");
//     }
//     get(){
//         console.log("MongoDb Get");
//     }
//     delete(){
//         console.log("MongoDb Delete");
//     }
//     update(){
//         console.log("MongoDb Update");
//     }
// }
// function addDatabase(database: IDatabase){
//     database.add();
// }
// let mysql = new MySql();
// let mongoDb = new MongoDb();
// addDatabase(mysql);
// addDatabase(mongoDb);
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.get = function () {
        console.log("Database Get");
    };
    Database.prototype.add = function () {
        console.log("Database Add");
    };
    return Database;
}());
var MySql = /** @class */ (function (_super) {
    __extends(MySql, _super);
    function MySql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySql.prototype["delete"] = function () {
        console.log("Mysql Delete");
    };
    MySql.prototype.update = function () {
        console.log("Mysql Update");
    };
    return MySql;
}(Database));
var MongoDb = /** @class */ (function (_super) {
    __extends(MongoDb, _super);
    function MongoDb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MongoDb.prototype["delete"] = function () {
        console.log("MongoDb Delete");
    };
    MongoDb.prototype.update = function () {
        console.log("MongoDb Update");
    };
    return MongoDb;
}(Database));
function addDatabase(database) {
    database["delete"]();
}
addDatabase(new MySql());
addDatabase(new MongoDb());
