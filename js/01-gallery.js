import { galleryItems } from "./gallery-items.js";
// Change code below this line

const li = ({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img class="gallery__image"src="${preview}"data-source=${original} alt="${description}">
    </a>
    </li>`;
};

const liElements = galleryItems.map(li).join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", liElements);

gallery.addEventListener("click", hendleClick);

function hendleClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const urlBigPicture = e.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
        <img src="${urlBigPicture}">
    `);

  instance.show();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}
