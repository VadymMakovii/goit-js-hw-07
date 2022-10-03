import { galleryItems } from './gallery-items.js';
// Change code below this line

const picturesBox = document.querySelector('ul.gallery');
const picturesMarkup = createGalleryItemsMarkup(galleryItems);

picturesBox.insertAdjacentHTML('afterbegin', picturesMarkup);

function createGalleryItemsMarkup(arr) {
    return arr.map(({ original, preview, description }) => {
        return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join(''); 
};

picturesBox.addEventListener('click', (event) => event.preventDefault());

const modalEl = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
