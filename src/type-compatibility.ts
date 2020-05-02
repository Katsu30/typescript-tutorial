export{};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

// 代入できるかどうかが確認されている
fooCompatible = barCompatible;

console.log(typeof barCompatible);

// -------------------------------------------- //

let fooIncompatible: string;
let barIncompatible: number = 1;

// 型が異なるので、代入は不可能（型の互換性はない）
// fooIncompatible = barIncompatible;

// -------------------------------------------- //

let fooString: string;
let barString: string = 'string';

// 型情報が同一のものは「型の互換性」がある
fooString = barString;

// 文字列リテラルを代入しても互換性がある
// TSのそれぞれの型には互換性のあるものとないものが存在する
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

fooString = fooStringLiteral;

// 下記のようにナンバーリテラルはナンバー型に型の互換性がある
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

fooNumber = fooNumberLiteral;

// -------------------------------------------- //

// オブジェクト間の代入でも型の互換性はチェックされる
// その際チェックされるのは「引数の値」であることを注意しておく
interface Animal {
    age: number;
    name: string;
}
class Person {
    constructor(public age: number, public name: string){}
}

let me: Animal;
me = new Person(43, 'はむさん');