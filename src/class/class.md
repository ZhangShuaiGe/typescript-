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
