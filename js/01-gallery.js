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

const modalEl = basicLightbox.create(`<img class="basicLightbox__picture">`, { onShow: () => { addEventListener("keydown", closeModalToKeydown), addEventListener("click", closeModalToClick) }, onClose: () => { removeEventListener("keydown", closeModalToKeydown), removeEventListener("click", closeModalToClick)} });

function createModal(event) {
    event.preventDefault();
    event.stopPropagation();
    
   if(event.target.nodeName !== 'IMG') {
       return;
    };
    const pictureLink = event.target.parentNode;
    const imageEl = modalEl.element().querySelector('img');

    imageEl.src = pictureLink;
    modalEl.show();
};

function closeModalToKeydown(event) {
    if (event.code !== "Escape") {
    return;
    } 
    modalEl.close();
};

function closeModalToClick() {
    modalEl.close();
};