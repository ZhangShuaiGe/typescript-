namespace $interface {
    // 输入参数 -> 设置接口
    interface $inuput {
        color: string;
        width: number;
    }

    // 输出参数 -> 设置接口
    // ?:代表参数可有可无，如果有就得是string类型
    interface $output {
        color: string;
        area: number;
        blue?: string;
    }

    function add(e: $inuput): $output {
        return {
            color: "red",
            area: 123,
            blue: "100"
        };
    }
    add({
        color: "red",
        width: 1000
    })
}

namespace $interface {
    //只读 readonly
    interface point {
        readonly x: number,
        readonly y: number
    }

    let p1: point = { x: 10, y: 20 };
    // console.log(p1)
    // p1.x = 20; //修改就会报错，readonly 不能修改
}

namespace $interface {
    //函数参数 兼容一些未知参数
    interface SquareConfig {
        color?: string;
        width?: number;
        [propName: string]: any;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
        return {
            color: "1",
            area: 100
        }
    }
    // obj没有定义，但是可以传入
    let mySquare = createSquare({ colour: 999, width: 100, obj: { name: 123 } });
    // console.log(mySquare);
}


namespace $interface {
    //函数参数 兼容一些未知参数 方法2 接口断言
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
        return {
            color: "1",
            area: 100
        }
    }
    // obj没有定义，但是可以传入
    let mySquare = createSquare({ color: "999", width: 100, obj: { name: 123 } } as SquareConfig);
    // console.log(333,mySquare);
}

// 可索引的类型
namespace $interface {

    interface StringArray {
        [index: string]: string; //这个例子：其实就是校验索引和值类型，对象的话 索引必须是 字符串，值必须是 字符串
    }

    let myArray: StringArray;
    myArray = {
        p:"100", 
        // p2:100,  报错：值是number,定义的是字符串

    };

    let myStr: string = myArray["p"];
    console.log(myStr);

}

// 函数类型
namespace $interface {
    // 其实就是定义 参数的类型和 返回值的类型
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    //参数名不需要一样
    mySearch = function (src, sub) {
        let result = src.search(sub);
        return result > -1;
    }

    // console.log(mySearch(100,200));  //报错：类型不同
}
