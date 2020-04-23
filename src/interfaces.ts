export{};

type ObjectType = {name: string; age: number;};

// エイリアスと同様にインターフェイスも型を設定できる
// インターフェイスの場合は'='は必要ない
interface ObjectInterface {
    name: string;
    age: number;
};

let object: ObjectInterface = {
    name: 'Ham',
    age: 43
};