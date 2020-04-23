export{};

// '|'は'or'的な意味を持つ
// つまり下記のコードでは数字でも文字列でも代入することができる
let value: number | string = 1;
value = 'foo';