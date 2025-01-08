import simpleLightbox from "simplelightbox";

export const box = document.querySelector(".box");

export default function renderCards(data) {
  data.hits.forEach((hit) => {
    box.innerHTML += `
        <li class='li'>
          <a href="${hit.largeImageURL}" class="img">
            <img class = "img" src="${hit.webformatURL}" alt="${hit.tags}" />
          </a>
          <div class = "div">
            <p  class="p"><span class="p__span">Likes </span> ${hit.likes}</p>
            <p  class="p"><span class="p__span">Views </span> ${hit.views}</p>
            <p  class="p"><span class="p__span">Comments </span> ${hit.comments}</p>
            <p  class="p"><span class="p__span">Downloads </span> ${hit.downloads}</p>
          </div>
        </li>
      `;
  });

  const lightBox = new simpleLightbox(".box a", {
    captionsData: "alt",
    captionDelay: 100,
    captionPosition: "bottom",
  });

  lightBox.refresh();
}
