export {};

// 引数として存在していても、存在していなくても良いものはどのように表現するのか
let bmi: (height: number, weight: number, printable?: boolean) => number = (
    // height,weightは必須の引数として記述されている
    height: number,
    weight: number,
    // あってもなくても良いものはアノテーションの前に'?'をいれる
    printable?: boolean
): number => {
    const bmi: number = weight / (height * height);

    // printableにtrueが入っていたらbmiが出力されるように修正
    if(printable) {
        console.log({bmi});
    }
   return bmi;
};

bmi(1.78, 86);