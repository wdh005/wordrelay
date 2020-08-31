const input_btn = document.querySelector("#ip_button");
const relay_btn = document.querySelector("#relay_button");
const word = document.querySelector("#word");
const error = document.querySelector("#error");
const input_presenter = document.querySelector("#input_presenter");
const input = document.querySelector("#input");

input_btn.addEventListener("click", createWord);
relay_btn.addEventListener("click", relay);

//한글 체크
const regexp = /[a-zA-Z]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
//사용한 단어가 저장될 배열
const dictionary = [];

function createWord() {
  const createPresenter = input_presenter.value;
  //한글체크
  if (regexp.test(createPresenter)) {
    alert("한글만 입력 하세요");
  } else {
    word.textContent = createPresenter;
    input_presenter.value = "";
  }
}

function relay() {
  //제시어가져오기
  const presenter = word.textContent;
  const relay_word = input.value;
  const lastIndex = presenter.length - 1;
  //한글체크
  if (regexp.test(relay_word)) {
    alert("한글만 입력 하세요");
  } else {
    //중복 단어 체크
    if (dictionary.includes(relay_word)) {
      error.textContent = "이미 사용한 단어 입니다.";
    } else {
      //중복 단어가 아닐 시 실행
      //제시어의 마지막 글자와 입력 문자의 첫글자가 같은지 확인
      if (presenter[lastIndex] === relay_word[0]) {
        word.textContent = relay_word;
        error.textContent = "";
        input.value = "";
        input.focus();
        dictionary.push(relay_word);
      } else {
        error.textContent = "틀렸습니다.";
        input.value = "";
      }
    }
  }
}
