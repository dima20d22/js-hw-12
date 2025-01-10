import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";
import "./css/style.css";
import iziToast from "izitoast";
import { nextPage, pageCount } from "./js/pixabay-api";
import { page } from "./js/pixabay-api";
import { box } from "./js/render-function";
import tryAndCatch from "./js/tryAndCatch";

const btnLoadMore = document.querySelector(".btn__load-more");
const form = document.querySelector("form");
const input = document.querySelector("input[type=text]");
const loader = document.querySelector(".loader");
const errrorMessage = document.querySelector("p");
console.log(page);

let oldInputValue = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  pageCount();
  let inputValue = input.value.trim();
  oldInputValue = inputValue;
  pageCount();

  if (inputValue === "") {
    iziToast.show({
      message: "Please give a valid input.",
      color: "red",
      position: "topRight",
    });
    return;
  }

  box.innerHTML = "";
  loader.classList.remove("is-hidden");
  errrorMessage.classList.add("is-hidden");
  btnLoadMore.classList.add("is-hidden");
  await tryAndCatch(inputValue, btnLoadMore, errrorMessage, loader);
  input.value = "";
});

btnLoadMore.addEventListener("click", async () => {
  await tryAndCatch(oldInputValue, btnLoadMore, errrorMessage, loader);
  nextPage();
  const rect = box.getBoundingClientRect();

  window.scrollBy({
    top: rect.bottom - window.innerHeight,
    behavior: "smooth",
  });

  console.log("Current page:", page);
});

console.log(window);
