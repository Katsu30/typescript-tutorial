export{};

// 明示的にundefinedを記述する際はundefined（return undefined）だったらundefined型を使用可能
// その他の場合に値が定義されない場合はvoid型を使用
function returnNothing(): void {
    console.log('I dont return anything!')
}
// 何も関数の戻り値がない場合でもundefinedは返ってくる
console.log(returnNothing());