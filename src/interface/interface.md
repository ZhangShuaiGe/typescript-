# interface 总结

>应用场景1： 接口类用在函数的形参定义数据类型 或者 定义函数return 出去的数据类型和字段

>应用场景2： 定义一个对象的所有数据类型，相当于是拆分出去集中管理的一个类型校验工具

* 可选属性 `?:` 代表这个参数可有可无，有就必须是约定好的数据类型

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
```

* 只读属性:`readonly` 代表这个参数只能读取不能修改

* 类型断言：有些时候不能把所有的参数类型都想好,绕过检查没有的字段，`注意:`只是不检查没有定义的，定义好的，按规则走

* 字符串索引签名(和类型断言功能类似): `[propName: string]: any`;

```ts
// 只要它们不是color和width，多余的参数无所谓它们的类型是什么。
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
```

* 函数类型接口: 其实就是定义 参数的类型和 返回值的类型,`注意:` 参数名不需要相同

```ts
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
```

* 可索引的类型: 其实就是校验索引和值类型

```ts
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
```

## implements与extends的定位

>参考原文：<https://1991421.cn/2020/01/30/9b18a5df/>

### implements

顾名思义，实现，一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能

### extends

顾名思义，继承，一个新的接口或者类，从父类或者接口继承所有的属性和方法，不可以重写属性，但可以重写方法

### 注意点

1. 接口只能、`extends`接口或类,
2. 类可以`implements`接口或类
3. 类只能`extends`类
4. 可多`extends`或者多`implements`
