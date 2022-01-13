import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector('.gallery');

function createImageMarcup() {
    const markup = galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    }).join('');

    galleryContainerEl.insertAdjacentHTML('afterbegin', markup)
};

createImageMarcup();

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'top',
    navText: ['<', '>']
});

