export{};

// enumではオブジェクトのような取得方法が利用可能
// 先頭の数値を設定すると、以下の数字はauto incrementされる
enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

Months.July;
// console.logをすると、キー番号が出力される
console.log(Months.March);

enum COLORS {
    RED = 'FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '0000FF',
    BLACK = '000000'
}

let green = COLORS.GREEN;
console.log({ green });

// あとでenum型に追加することもできる
enum COLORS {
    YELLOW ='#FFFF00'
}
let yellow = COLORS.YELLOW;
console.log({yellow});