import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getImagesByQuery from "./js/pixabay-api";
import { clearGallery, renderGallery, showLoader, hideLoader } from "./js/render-functions";
const list = document.querySelector(".gallery");
const form = document.querySelector(".form");
hideLoader();
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    clearGallery();
    showLoader();
    const inputImg = event.target.elements["search-text"].value;
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
    } else{getImagesByQuery(inputImg)
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
                renderGallery(data);
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
}

