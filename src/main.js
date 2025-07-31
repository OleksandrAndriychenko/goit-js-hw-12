import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getImagesByQuery from "./js/pixabay-api";
import { clearGallery, renderGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";
const form = document.querySelector(".form");
const nextBtn = document.querySelector(".nextBtn");
let urlPage = 1;
let totalPages;
let inputImg
function izi() {
    return iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: "#ef4040",
            titleColor: "#fff",
            messageColor: "#fff",
        });
};


function iziEnd() {
    return iziToast.error({
                    title: 'Error',
                    message: "We're sorry, but you've reached the end of search results.",
                    position: 'topRight',
                    backgroundColor: "#ef4040",
                    titleColor: "#fff",
                    messageColor: "#fff",
                });
};


function smoothScrollAfterLoad() {
    const firstCard = document.querySelector('.gallery-card');
    if (!firstCard) return;
    const cardHeight = firstCard.getBoundingClientRect().height;
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
};







hideLoadMoreButton();
hideLoader();
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    clearGallery();
    showLoader();
    inputImg = event.target.elements["search-text"].value.trim();
    if (!inputImg) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: "#ef4040",
            titleColor: "#fff",
            messageColor: "#fff",
        });
        hideLoader();
        return;
    } else {getImagesByQuery(inputImg, urlPage)
        .then(data => {
            if (data.hits.length <= 0) {
                hideLoader();
                izi();
            } else {
                hideLoader();
                renderGallery(data.hits);
                totalPages = data.totalHits / data.hits.length;
                if (totalPages <= 1) {
                    hideLoadMoreButton();
                    iziEnd();
                } else {
                    showLoadMoreButton();
                }
            }
        })
        .catch(error => {
            hideLoader();
            izi();
        })}
};

nextBtn.addEventListener("click", handleClic);
function handleClic(event) {
    urlPage += 1;
    if (urlPage <= totalPages) {
        showLoader();
        getImagesByQuery(inputImg, urlPage)
            .then(data => {
                if (data.hits.length <= 0) {
                    hideLoader();
                    izi();
                } else {
                    hideLoader();
                    renderGallery(data.hits);
                    smoothScrollAfterLoad();
                    urlPage += 1;
                }
            })
            .catch(error => {
                hideLoader();
                izi();
            })
    } else {
        hideLoadMoreButton();
        iziEnd();
    }
};
