export{};

// string型だけでなく、さらに「特定の文字列」のみ代入可能を設定できる
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';

// 意図しない文字列が入ってきたらエラーで弾きたい
// dayOfTheWeek = '31';

// number型も設定可能
let month: 1|2|3|4|5|6|7|8|9|10|11|12  = 1;
month = 12;

// boolean型にも下記のようにリテラルを設定もできる
let TRUE: true = true;