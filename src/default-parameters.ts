export {};

// デフォルトの値は引数の後ろに'='でつないで書く
// これは通常のJSと同じ書き方なので、特に意識しなくても大丈夫
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
    return currentSalary * rate;
}

// 第二引数に何も設定していない場合はデフォルトの引数が入力される
console.log(nextYearSalary(1000));