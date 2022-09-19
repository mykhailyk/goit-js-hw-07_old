import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryItemMarkup = createGalleryItemMarkup("galleryItem");

galleryRef.addEventListener("click", onItemContainerClick);

function createGalleryItemMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", galleryItemMarkup);

function onItemContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const image = event.target.dataset.source;

  const modalWindow = basicLightbox.create(`
    <img src="${image}" width="800" height="600">`);

  modalWindow.show();

  galleryRef.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modalWindow.close();
    }
    galleryRef.removeEventListener("click", onItemContainerClick);
  });
}
