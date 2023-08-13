const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function() {
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  const images = await res.json();
  selectRandomImage(images);
  // ^ In the getImage() async function, call the selectRandomImage() function, and pass it images as an argument. Now you’re ready to check the data from randomIndex. MEANING- Simply switch selectRandomImage with console.log...
};

const selectRandomImage = function(images) {
const randomIndex = Math.floor(Math.random() * images.length);
// ^ picks from images 0-99
const randomImage = images[randomIndex];
// ^ Grabs a single image from the images array
//console.log(randomIndex);
//console.log(randomImage);
displayImage(randomImage);
// ^ Calls the displayImage funtion, passing the randomImage variable as an argument
}

const displayImage = function(randomImage) {
  const author = randomImage.author;
  // ^ Will access the author property from the randomImage object.
  const imageAddress = randomImage.download_url;
  // ^ Will access the downlard_url property from the randomImage object.
  authorSpan.innerText = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide")
}

button.addEventListener("click", function() {
  getImage();

});