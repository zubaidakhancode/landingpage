const input = document.getElementById("textInput");
const count = document.getElementById("charCount");

input.addEventListener("input", function () {
  count.textContent = input.value.length;
});
