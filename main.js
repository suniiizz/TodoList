const listBox = document.querySelector(".list__box");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__btn");

function onAdd() {
  // 사용자가 입력한 텍스트 받아오기
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  // 새로운 목록 만들기
  const listItem = newList(text);

  // 새로운 목록을 리스트에 추가
  // ul.list__box에 li.list__inner 자식 붙이기
  listBox.appendChild(listItem);

  // 인풋 초기화
  input.value = "";
  input.focus();
}

// 새로운 목록 함수 newList
function newList(text) {
  // 새로운 목록이 생기면 ~
  // li.list__inner 클래스 붙이기
  const listInner = document.createElement("li");
  listInner.setAttribute("class", "item__inner");

  // div.list__item 클래스 붙이기
  const listItem = document.createElement("div");
  listItem.setAttribute("class", "list__item");

  // span.list__name 클래스 붙이기
  const listName = document.createElement("span");
  listName.setAttribute("class", "list__name");
  listName.innerText = text;

  // button.list__delete 클래스 붙이기
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "list__delete");
  deleteBtn.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
  deleteBtn.addEventListener("click", () => {
    listBox.removeChild(listInner);
  });

  // div.list__divide 클래스 붙이기
  const listDivide = document.createElement("div");
  listDivide.setAttribute("class", "list__divide");

  // div.list__item에 자식 붙이기
  // span.list__name / button.list__delete
  listItem.appendChild(listName);
  listItem.appendChild(deleteBtn);

  // li.list__inner에 자식 붙이기
  // div.list__item / div.list__divide
  listInner.appendChild(listItem);
  listInner.appendChild(listDivide);

  // 새로운 목록 리턴하기 li.list__inner
  return listInner;
}

// div.footer__btn 클릭 시 onAdd 함수 실행
addBtn.addEventListener("click", () => {
  onAdd();
});

// 엔터를 눌렀을때
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});
