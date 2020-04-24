export{};

// 引数にアノテーションを追加
// 関数の前にもアノテーションを追加
function bmi (height: number, weight: number): number{
    return weight / (height * height);
}

bmi(1.78, 86);