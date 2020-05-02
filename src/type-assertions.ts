export{};

// 今までの学習だと以下の書き方になる
// let name: string = 'Ham';
// let length: number = name.length;

let name: string = 'Ham';
let length= (name as string).length;

// 下記の記述もできるが、JSXの記法と似ているため、非推奨。
// let length= (<string>name).length;


//length = 'foo';