export{};

class Person {
    // コンストラクタの引数にアクセス修飾詞を設定することで、宣言が完了する
    // TypeScriptの独自の処理方法
    constructor(public name: string, protected age: number) {
    }
}

const me = new Person('ハムさん', 43);
console.log(me);