import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getImagesByQuery from "./js/pixabay-api";
import { clearGallery, renderGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";
const form = document.querySelector(".form");
const nextBtn = document.querySelector(".nextBtn");
let urlPage = 1;
let totalPages;
let inputImg
showLoadMoreButton();
hideLoader();
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    urlPage = 1;
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
            if (data.length <= 0) {
                hideLoader();
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    backgroundColor: "#ef4040",
                    titleColor: "#fff",
                    messageColor: "#fff",
                });
            } else {
                hideLoader();
                renderGallery(data.hits);
                totalPages = data.total / data.hits.length;
                urlPage += 1;
                hideLoadMoreButton();
            }
        })
        .catch(error => {
            hideLoader();
            iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    backgroundColor: "#ef4040",
                    titleColor: "#fff",
                    messageColor: "#fff",
                });
        })}
};

nextBtn.addEventListener("click", handleClic);
function handleClic(event) {
    if (urlPage < totalPages) {
        showLoader();
        getImagesByQuery(inputImg, urlPage)
            .then(data => {
                if (data.length <= 0) {
                    hideLoader();
                    iziToast.error({
                        title: 'Error',
                        message: 'Sorry, there are no images matching your search query. Please try again!',
                        position: 'topRight',
                        backgroundColor: "#ef4040",
                        titleColor: "#fff",
                        messageColor: "#fff",
                    });
                } else {
                    hideLoader();
                    renderGallery(data.hits);
                    totalPages = data.total / data.hits.length;
                    urlPage += 1;
                }
            })
            .catch(error => {
                hideLoader();
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    backgroundColor: "#ef4040",
                    titleColor: "#fff",
                    messageColor: "#fff",
                });
            })
    } else {
        showLoadMoreButton();
        iziToast.error({
                    title: 'Error',
                    message: "We're sorry, but you've reached the end of search results.",
                    position: 'topRight',
                    backgroundColor: "#ef4040",
                    titleColor: "#fff",
                    messageColor: "#fff",
                });
    }
};
