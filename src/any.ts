import axios from 'axios';

export{};

// axiosを使用してのレスポンス取得
let url: string =
'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url)
  .then(function (response) {
      // interfaceは独自の型を作成することができる？
      interface Article {
          id: number;
          title: string;
          description: string;
      }
      // 型として推論ができていない時にはany型を使用する（できるだけ使用しない）
      // axiosから返ってくるデータがわからない時などに使用できる
      let data: Article[];
      data = response.data;
    console.log(data);
  })