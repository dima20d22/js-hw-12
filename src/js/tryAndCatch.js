import "izitoast/dist/css/iziToast.min.css";
import searchApi from "./pixabay-api";
import renderCards from "./render-function";

let totalHits = 0;

export default async function tryAndCatch(
  inputValue,
  btnLoadMore,
  errrorMessage,
  loader
) {
  try {
    const response = await searchApi(inputValue);
    console.log(response);

    if (response.status !== 200) throw new Error("Failed to fetch data.");

    const data = response.data;

    if (data.total === 0) {
      iziToast.show({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        color: "red",
        position: "topRight",
      });
      errrorMessage.classList.remove("is-hidden");
      btnLoadMore.classList.add("is-hidden");
      return;
    }

    renderCards(data);
    totalHits = data.hits.length;
    if (totalHits < 15 && totalHits === data.total) {
      btnLoadMore.classList.add("is-hidden");
    } else if (totalHits < 15 && totalHits < data.total) {
      btnLoadMore.classList.add("is-hidden");
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        color: "red",
        position: "topRight",
      });
    } else {
      btnLoadMore.classList.remove("is-hidden");
    }
  } catch (error) {
    iziToast.show({
      message: "An error occurred while fetching the data.",
      color: "red",
      position: "topRight",
    });
  } finally {
    loader.classList.add("is-hidden");
  }
}
