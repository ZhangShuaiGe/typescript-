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
    
    let myArray: string[];
    myArray = ["Bob", "Fred"];

    let myStr: string = myArray[0]
    console.log(myStr);

}