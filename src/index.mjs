import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成 jsでDOMを作成するには、createElementという関数を使う
  const div = document.createElement("div");
  // div(生成したDOM)に対して、classNameというプロパティがあるので、そこにクラス名を入れてあげる
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  // liタグの中身に要素を格納したい場合は、innerTextというプロパティが使える
  li.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};


document.getElementById("add-button")
.addEventListener("click", () => onClickAdd());
