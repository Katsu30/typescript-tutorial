export{};

// 実行している処理は同じようなもので型だけが異なるメソッド
// 名前を変えて複数設定することもできるが、ジェネリクスを使えば簡単に設定できる

// const echo = (arg: number): number => {
//     return arg;
// }

// const echo = (arg: string): string => {
//     return arg;
// }

// ジェネリクス関数
// <T>が慣習的に用いられる
const echo = <T>(arg: T): T => {
    return arg;
}

console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

// ジェネリクスを使用してクラスの処理を書いてみる
// classの直後にジェネリクスの変数を設定して、クラス内で使用する
class Mirror<T> {
    constructor(public value: T) {
    }

    echo(): T {
        return this.value;
    }
}

console.log(new Mirror<number>(123).echo());