// each time we press on something that triggers this function, it will keep adding more images to the div
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    // setting the source of where to find the image
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    // appending the image element to the flex-cat-gen div
    div.appendChild(image);
}