export{};

// アノテーションを使用するのみだと、オブジェクトは自由に書き換え可能になってしまう
let profile1: object = {name: 'Ham'};
profile1 = {birthYear: 1976};

// アノテーションで宣言していないプロパティではエラー発生
// アノテーションで宣言したプロパティは自由に書き換えることができる
let profile2: {
    name: string;
} = {name: 'Ham'};
profile2 = {name: 'Nimo'};