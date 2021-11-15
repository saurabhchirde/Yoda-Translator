const txtInput = document.querySelector("#txt-input");
const btnClear = document.querySelector("#btn-clear");
const btnTranslate = document.querySelector("#btn-translate");
const divOut = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/yoda.json";

function makeURLcomplete(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error occured ", error);
  alert("Server is not rechable :( try again later");
}

btnTranslate.addEventListener("click", function () {
  const txt = txtInput.value;

  fetch(makeURLcomplete(txt))
    .then((response) => response.json())
    .then((json) => {
      var result = json.contents.translated;
      divOut.innerText = result;
    })
    .catch(errorHandler);
});

btnClear.addEventListener("click", function () {
  txtInput.value = "";
  divOut.innerText = "";
});
