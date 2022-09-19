import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
  galleryItem: document.querySelector(".gallery__item"),
  galleryImage: document.querySelector(".gallery__image"),
};

addMarkup(galleryItems);

function addMarkup(items) {
  refs.gallery.innerHTML = createMarkup(items);
}

function createMarkup(items) {
  return items.map((element) => createElementMarkup(element)).join("");
}

function createElementMarkup(element) {
  return `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}"/>
</a>`;
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
