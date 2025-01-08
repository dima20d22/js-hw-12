const APIKey = "47994824-0d51099febe4e8602bb4fd3aa";
import axios from "axios";

export let page = 1;

export default async function searchApi(input) {
  return await axios.get("https://pixabay.com/api/", {
    params: {
      key: APIKey,
      q: input,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
}

export function nextPage() {
  page++;
}

export function pageCount() {
  page = 1;
}
