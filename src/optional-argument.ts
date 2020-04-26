export{};

// オプショナルな引数はどのように設定するのか
// "?"をアノテーションの前に追加する
let bmi = (height: number, weight: number, printable?: boolean) => (
    height: number,
    weight: number,
    printable?: boolean
): number => {
    const bmi: number = weight / (height * height);

    if(printable){
        console.log({bmi});
    }
   return bmi;
};

// bmi(身長、体重、console.logで出力するかどうか)
// bmi(1.78, 86, true);  <-こんな形でも関数が動作するようにする
bmi(1.78, 86, true);
