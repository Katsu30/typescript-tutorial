export{};

let name = 'Atsushi';

name = 'Ham';

// 'as const'を使用して、constアサーションを設定すると、定数の一貫性が強くなる
// 下記では'Ham'以外の文字列は際代入ができない
let nickname = 'Ham' as const;

// プロパティも同様に'as const'を使用すると、再代入不可のプロパティになる
// 型的にはreadonlyになる
let profile = {
    name: 'Atsushi',
    height: 178
} as const;

