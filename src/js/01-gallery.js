// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = imageInGallery(galleryItems);

function imageInGallery(AllImages) {
	return AllImages
		.map(({ preview, original, description }) => 
				`<a class='gallery__item' href='${original}'>
            <img class="gallery__image" src="${preview}" alt="${description}">
          </a>`,).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
      caption: true,
      captionsData: 'alt',
      captionDelay: 250,
    });

console.log(galleryItems);
