export{};

const kansu = (): number => 43;

// なんでも取得可能
let numberAny: any = kansu();
// unknown型は「内容がわからない」変数に設定する
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// 'typeof'は「型を取得する」指令
// 条件を設定すると、条件を通り抜けた場合は実行が可能となる
// 「タイプガード（型ガード）」という構造
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
}