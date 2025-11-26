/*
Name: Michael Mcdonald
File: index.html
Date: 18 November 2025
INFT1206 – Web Development Fundamentals

Image Gallery
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");



const images = [
	{filename: "pic1.jpg", alt: "Closeup of a human eye."},
	{filename: "pic2.jpg", alt: "Rock that looks like a wave."},
	{filename: "pic3.jpg", alt: "Purple and white pansies."},
	{filename: "pic4.jpg", alt: "Section of wall from a pharoh's tomb."},
	{filename: "pic5.jpg", alt: "large moth on a leaf."}
];

const baseURL = 
	"https://mdn.github.io/shared-assets/images/examples/learn/gallery/";
for (const image of images) {
	const newimage = document.createElement("img");
	newImage.src = `${baseURL}${image.filename}`;
	newImage.alt = image.alt;
	newImage.tabIndex = "0";
	thumbBar.appendChild(newimage);
	newImage.addEventListener("click", updateDisplayedImage);
	newImage.addEventListener("keydown", (e) => {
		if(e.code === "Enter") {
			updateDisplayedImage(e);
		}
	});
}

function updateDisplayedImage(e) {
	displayedImage.src = e.target.src;
	displayedImage.alt = e.target.alt;
}

btn.addEventListener("click", () => {
	if(btn.classList.contains("dark")){
	btn.textContent === "Lighten";
	overlay.style.backgroundColor = "rgb(0 0 0/ 0.50";
} else {btn.textContent = "Darken";
	overlay.style.backgroundColor = "rgb(0 0 0/ 0)";
}
btn.classList.toggle("dark");
});
