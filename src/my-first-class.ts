export{};

// classの作り方は通常のJSと同じ
class Person {
    // class内のアノテーションはコンストラクタより以前で行う
    name: string;
    age: number;

    // コンストラクタには戻り値へのアノテーションは必要ない
    // もしアノテーションを書いてしまうとエラーになる(言語仕様)
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // class内の関数にもアノテーションを設定する
    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
