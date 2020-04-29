export {};

// MDA（レファレンス）からの取得
// 配列のそれぞれの値を取得して足し算される
const reducer = (accumulator: number, currentValue: number) => {
    return accumulator + currentValue;
};

// JSと同様にrestパラメーターを使用できる
const sum: (...values: number[]) => number = (...values: number[]): number => {
    // reducerを使用し、全ての配列内の値を足し合わせる
    return values.reduce(reducer);
}

sum(1, 2, 3, 4, 5);