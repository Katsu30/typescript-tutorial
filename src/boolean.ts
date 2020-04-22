// exportの意味->グローバル空間からモジュールシステムに変更
export{};

let name = 'TypeScript';

// 変数や定数に型を追加する
// :<型の形>で入力する
let isFinished: boolean = true;
isFinished = false;

// 型が異なるとエラー起こる
// isFinished = 1;

console.log({isFinished});