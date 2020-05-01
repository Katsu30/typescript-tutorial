export{};

abstract class Animal {
    abstract cry(): string;
}

// 抽象クラスのメソッドやプロパティはオーバーライドしなくてはいけない
class Lion extends Animal {
    cry() {
        return 'roar';
    }
}

// 抽象クラスをオーバーライドしていないとエラーが起きる
// class Tiger extends Animal {

// }