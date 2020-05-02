export{};

interface profile {
    name: string;
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

// 下記のように「宣言されていないプロパティ」にはどのように代入したらいいのか
let profile: profile = {name: 'Ham', underTwenty: false};

// How to write index signatures
// { [index: typeForIndex]: index: typeForValue}

profile.name = 'Ham';
profile.age = 43;