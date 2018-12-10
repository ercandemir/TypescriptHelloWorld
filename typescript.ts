// let a: string;
// let b:number;
// let c: boolean;
// let d: any;//dinamik tip (string, int veya bool)
// a = "Hello World";
// b = 22;
// c = true;
// d = 25
// console.log(a, b, c, d);

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

abstract class Database{
    get(){
        console.log("Database Get");
    }
    add(){
        console.log("Database Add");
    }

    abstract delete();
    abstract update();
}

class MySql extends Database{
    delete(){
        console.log("Mysql Delete");
    }

    update(){
        console.log("Mysql Update");
    }
}

class MongoDb extends Database{
    delete(){
        console.log("MongoDb Delete");
    }

    update(){
        console.log("MongoDb Update");
    }
}

function addDatabase(database: Database){
    database.delete();
}

addDatabase(new MySql());
addDatabase(new MongoDb());

