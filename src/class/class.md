# class类总结

- protected 只有他自身或者继承他的类可以用，不能通过直接new调用

```js
// 错误示范
class Person {
    protected name: string; //只能继承使用
    public constructor(theName: string) { this.name = theName; }
}
var a = new Person("100");
console.log(a.name)  //报错，属性“name”受保护，只能在类“Person”及其子类中访问。
```

- public 和 provate 很好理解，public谁都可以用,provate除了自己谁也不能用

- readonly只能类自己修改,继承的子类和new出来的实例都不能修改

- static(es6的) 不能被new实例去调用，可以通过类直接调用，可以继承，继承后也只能通过`子类`打点直接调用

```js
class Father {
    static testMethod() {
        return 'hello';
    }
}
// 直接调用 static方法
Father.testMethod() // 'hello'

// 错误用法， 实例不能调用 static方法
var Child = new Father();
Child.testMethod()

```

- abstract 抽象类，其实就是提前定义好一个类， 类里面用abstract 定义的函数 都必须在子类里有

> 思考了一下这个抽象类有什么作用？ 目前能想到就是给使用类的人一个提示作用，没写任何具体实现，可以提前备注好各个方法用来干什么，更清晰

```js
    abstract class Department {

        constructor(public name: string) {
        }

        printName(): void {
            console.log('Department name: ' + this.name);
        }

        abstract printMeeting(): void; // 必须在派生类中实现,就是继承的类
    }

    class AccountingDepartment extends Department {

        constructor() {
            super('Accounting and Auditing');
        }

        // 子类也定义，好结束，这就是抽象类
        printMeeting(): void {
            console.log('The Accounting Department meets each Monday at 10am.');
        }
    }
```
