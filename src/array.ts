export{};

let numbers: number[] = [1, 2, 3];

// ジェネリクスで配列を作成する際に下記の書き方もできる
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let string: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigen: number[][] = [
    [50, 100],
    [150, 300]
];

// 複数の型が入力できる変数の場合は下記のような書き方をする
// 共用型(Union Types)と呼ぶ
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
console.log(hairetsu);