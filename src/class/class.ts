// protected 演示只能被子类用
namespace $class {

    class Person {
        protected name: string;
        protected constructor(theName: string) { this.name = theName; }
    }
    // Employee 能够继承 Person
    class Employee extends Person {

        private department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            this.name = "666";
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let howard = new Employee("Howard", "Sales");
    // console.log(howard.getElevatorPitch());

}

// 演示readonly
// 结果：子类和实例都不能修改
namespace $class {

    class Octopus {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor(theName: string) {
            this.name = theName;
        }
    }

    class Test extends Octopus {
        public constructor(name: string) {
            super(name);
            // this.name = "尝试修改" //报错：子类不能修改
            console.log(111, this.name)
        }
    }

    let dad = new Octopus("Man with the 8 strong legs");
    // console.log(dad.name); // Man with the 8 strong legs
    // dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
}

// 抽象类
namespace $class {
    abstract class Department {

        constructor(public name: string) {
        }
    
        printName(): void {
            // console.log('Department name: ' + this.name);
        }
        abstract ago:number;
        abstract printMeeting(): void; // 必须在派生类中实现
    }

    class AccountingDepartment extends Department {
        public ago:number
        constructor() {
            super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
            this.ago = 22;
        }
        printMeeting(): void {
            console.log('The Accounting Department meets each Monday at 10am.');
        }
    }

}

namespace $class {
    
     class A{
         public ago: any
    }
    interface ClockInterface extends A {
        currentTime: Date;
    }
    
    
    class Clock implements ClockInterface {
        currentTime: Date;
        ago:any;
        constructor(h: number, m: number) {
            this.currentTime = new Date();
            this.ago = 100
         }
    }
}