let modal = document.getElementById('modalWindow');
let img = document.getElementById('img1');
let modalImg = document.getElementById('modalImg');
let captionText = document.getElementById("caption");
img1.addEventListener('click', modalFunc)
function modalFunc(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
modalClose.addEventListener('click', closeFunc);
function closeFunc(){
    modal.style.display = "none";
} 