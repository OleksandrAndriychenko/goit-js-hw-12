import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
let lightbox = null;
const gallery = document.querySelector('.gallery');
function createGallery(images) {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-card">
            <a class="gallery-link" href=${largeImageURL}>
            <img
                class="gallery-image"
                src=${webformatURL}
                alt=${tags}
            /></a>
            <div class="note">
                <div class="likes">
                <h3>likes</h3>
                <h3>${likes}</h3>
                </div>
                <div class="views">
                <h3>views</h3></h3>
                <h3>${views}</h3>
                </div>
                <div class="comments">
                <h3>comments</h3>
                <h3>${comments}</h3>
                </div>
                <div class="downloads">
                <h3>downloads</h3>
                <h3>${downloads}</h3>
                </div>
            </div>
        </li>
    `).join("");
    
}

function updateLightbox() {
    if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
        animationSpeed: 300,
        loop: true,
        showCounter: true,
        });
    }
}

export function clearGallery() {
        gallery.innerHTML = '';
}

export function renderGallery(images) {
    gallery.insertAdjacentHTML("beforeend", createGallery(images));
    updateLightbox();
};

export function showLoader() {
    const loader = document.querySelector('.hiden');
    loader.classList.add('loader');
};

export function hideLoader() {
    const loader = document.querySelector('.hiden');
    loader.classList.remove('loader');
};
export function showLoadMoreButton() {
    const nextBtn = document.querySelector('.nextBtn');
    nextBtn.classList.add('hidden');
};
export function hideLoadMoreButton() {
    const nextBtn = document.querySelector('.nextBtn');
    nextBtn.classList.remove('hidden');
};