import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryContainerEl = document.querySelector('.gallery');
const cardsImage = createImageMarcup();

galleryContainerEl.addEventListener('click', onImageContainerClick);

function createImageMarcup() {
  const markup = galleryItems.map(({ preview, original, description }) => {
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
  }).join('');

  galleryContainerEl.insertAdjacentHTML('afterbegin', markup)
};

function onImageContainerClick(event) {
  window.addEventListener('keydown', onEscKeyPress);

  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

  instance.show()

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close()
    }
  }
}