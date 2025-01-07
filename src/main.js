import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import searchApi from "./js/pixabay-api";
import renderCards from "./js/render-function";
import { nextPage } from "./js/pixabay-api";
import { page } from "./js/pixabay-api";

const form = document.querySelector("form");
const input = document.querySelector("input[type=text]");
const loader = document.querySelector(".loader");
const errrorMessage = document.querySelector("p");
const btnLoadMore = document.querySelector(".btn__load-more");

async function tryAndCatch(inputValue) {
  try {
    const response = await searchApi(inputValue);
    console.log(response);
    const data = response.data;
    renderCards(data);
  } catch (error) {
    iziToast.show({
      message: "An error occurred while fetching the data.",
      color: "red",
    });
  } finally {
    loader.classList.add("is-hidden");
    btnLoadMore.classList.remove("is-hidden");
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let inputValue = input.value.trim();

  if (inputValue === "") {
    iziToast.show({
      message: "Please give a valid input.",
      color: "red",
    });
    return;
  }

  // if (page >= 2) {
  //   page = 1;
  // }

  try {
    page = 1;
  } catch (error) {
    console.log(error);
  }

  loader.classList.remove("is-hidden");
  errrorMessage.classList.add("is-hidden");
  await tryAndCatch(inputValue);
  inputValue = "";
});

btnLoadMore.addEventListener("click", async () => {
  console.log(page);
  const inputValue = input.value.trim();
  nextPage();
  await tryAndCatch(inputValue);
});
