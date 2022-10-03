import { galleryItems } from './gallery-items.js';
// Change code below this line

const picturesBox = document.querySelector('div.gallery');
const picturesMarkup = createGalleryItemsMarkup(galleryItems);

picturesBox.insertAdjacentHTML('afterbegin', picturesMarkup);

function createGalleryItemsMarkup(arr) {
    return arr.map(({ original, preview, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
    }).join(''); 
};

picturesBox.addEventListener('click', createModal);

const modalEl = basicLightbox.create(`<img class="basicLightbox__picture">`);

function createModal(event) {
    event.preventDefault();
    event.stopPropagation();
   if(!event.target.classList.contains('gallery__image')) {
       return;
    };
    const pictureLink = event.target.parentNode;
    const imageEl = modalEl.element().querySelector('img');

    imageEl.src = pictureLink;
    modalEl.show();
    document.addEventListener("keydown", closeModal);
    document.addEventListener("click", closeModalToClick);
};

function closeModal(event) {
    if (event.code !== "Escape") {
    return;
    } 
    modalEl.close();
    document.removeEventListener("keydown", closeModal);
};

function closeModalToClick(event) {
    if (event.target.classList.contains('basicLightbox__picture')) {
        return;
    }
    modalEl.close();
    document.removeEventListener("click", closeModalToClick);
}