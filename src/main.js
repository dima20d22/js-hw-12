import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import searchApi from "./js/pixabay-api";
import renderCards from "./js/render-function";

const form = document.querySelector("form");
const input = document.querySelector("input[type=text]");

const loader = document.querySelector(".loader");
const errrorMessage = document.querySelector("p");
const btnLoadMore = document.querySelector(".btn__load-more");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  input.value = input.value.trim();
  if (input.value === "") {
    iziToast.show({
      message: "Please give a valid input.",
      color: "red",
    });
    return;
  }

  btnLoadMore.classList.remove("is-hidden");
  loader.classList.remove("is-hidden");
  errrorMessage.classList.add("is-hidden");

  try {
    const response = await searchApi(input.value);
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
  }
  input.value = "";
});
