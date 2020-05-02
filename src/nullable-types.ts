export{};

// コンパイルする際にstrict null checkが入って居ると、nullが設定できない
// tsconfig.tsの値をfalseに設定してあげるとエラーはなくなる　→ 非推奨
// nullを許容したいときは下記のようにユニオン型で設定するほうがベター
let profile: {name: string; age: number | null} = {
    name: 'Ham',
    age: null
}