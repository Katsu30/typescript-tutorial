export{};

// 変数bmiにも型アノテーションを追加した形
let bmi: (height: number, weight: number) => number = (
    height: number,
    weight: number
): number => weight / (height * height);
// アロー関数の特徴だが、returnを省略することができる

console.log(bmi(1.78, 86));