export{};

// 共有型より制約を強くする
// 配列のn番目に型の制約を追加することができる
// tuple型は型推論では利用できないのでプログラマーが覚えるしかない

let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Hum'];