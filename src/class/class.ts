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
    console.log(howard.getElevatorPitch());

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
    console.log(dad.name); // Man with the 8 strong legs
    // dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
}


namespace $class {

}