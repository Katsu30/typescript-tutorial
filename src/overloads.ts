export {};

// 関数名の重複が怒っている場合は？

// まずシグネーチャー（関数名と戻り値の型）を宣言する
function double(value: number): number;
function double(value: string): string;

// 実際の関数では'any'型でアノテーションをする
// それぞれの型で分岐をさせる
// シグネーチャーで選択されている型しか下記の関数には入ってこない
function double(value: any): any {
    console.log(typeof value);
    if (typeof value === 'number'){
        return value * 2;
    } else {
        return value + value;
    }
}

console.log(double(100));
console.log(double('Go '))