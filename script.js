const txtInput = document.querySelector("#txt-input");
const btnClear = document.querySelector("#btn-clear");
const btnTranslate = document.querySelector("#btn-translate");
const divOut = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/yoda.json";

const makeURLcomplete = (text) => {
  return serverURL + "?" + "text=" + text;
};

const errorHandler = (error) => {
  console.log("Error occured ", error);
  alert("Server is not rechable :( try again later");
};

btnTranslate.addEventListener("click", () => {
  const txt = txtInput.value;

  fetch(makeURLcomplete(txt))
    .then((response) => response.json())
    .then((json) => {
      var result = json.contents.translated;
      divOut.innerText = result;
    })
    .catch(errorHandler);
});

btnClear.addEventListener("click", () => {
  txtInput.value = "";
  divOut.innerText = "";
});
