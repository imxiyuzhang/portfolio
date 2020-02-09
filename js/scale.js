// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.img-scale');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.img-scale').click(function(){
    modal.style.display = "block";
    console.log(modalImg);
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
    console.log("img zoom");
    
 }