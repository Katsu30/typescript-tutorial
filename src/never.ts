export{};

// 呼び元に戻ってこない＝never
function error(message: string): never {
    // 例外処理の戻りにはnever型を指定する
    throw new Error(message);
}

// エラーの出力(エラーハンドリング)
try {
    let result = error('test');
    console.log({result});
} catch(error) {
    console.log({error});
}

// void型にはundefinedが含まれる
// never型には値という概念がないので値を持つことはできない
// never型はエラーしか取得できない
let foo: void = undefined;
let bar: never = error('only me!');