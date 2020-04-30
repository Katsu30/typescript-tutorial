export{};

// classの作り方は通常のJSと同じ
class Person {
    // class内のアノテーションはコンストラクタより以前で行う
    // 変数の前にアクセス修飾詞も設定することができる
    public name: string;
    // private age: number;
    protected age: number;
    protected nationality: string;

    // protectedは子のインスタンスからでも参照可能になる

    // コンストラクタには戻り値へのアノテーションは必要ない
    // もしアノテーションを書いてしまうとエラーになる(言語仕様)
    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    // class内の関数にもアノテーションを設定する
    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        // 継承はsuperでJSと同じ
        super(name, age, nationality);
    }

    // ageはprivateなので、継承したクラスからはアクセスできない
    profile(): string {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    }
}

let taro = new Android('Taro', 30, 'Japan');
console.log(taro.name);
// 外部から参照できないために下記の出力ではエラーが起きる
// console.log(taro.age);
console.log(taro.profile());
