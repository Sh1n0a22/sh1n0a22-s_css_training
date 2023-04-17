let preImg = document.querySelector(".slider-image")
let images = document.querySelectorAll(".slider-image");
let currentImage = 0;


preImg.classList.add("active")
function showImage(index) {
    preImg.classList.remove("active")
    images.forEach(img => {
        img.classList.remove("active")
    });
    images[index].classList.add("active")
}

function nextImage() {
    currentImage++
    if (currentImage >= images.length) {
        currentImage = 0
    }
    showImage(currentImage)
}
function prevImage() {
    currentImage--
    if (currentImage >= images.length  )currentImage = 0 
    if(currentImage < 0 )currentImage = images.length - 1 

    showImage(currentImage)
}