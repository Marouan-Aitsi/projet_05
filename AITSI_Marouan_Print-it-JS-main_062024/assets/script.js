const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dots = document.querySelector(".dots")
let index = 0
const arrow_left = document.querySelector("#banner .arrow_left")
const arrow_right = document.querySelector("#banner .arrow_right")
const banner_img = document.querySelector("#banner .banner-img")
const text_img = document.querySelector("p")


function dotsNumber () {
	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)
		if (i == index) {
			dot.classList.add("dot_selected")
		}
	}
}
dotsNumber()


arrow_left.addEventListener("click",() => {
	const slideDots = document.querySelectorAll(".dots .dot")
	slideDots[index].classList.remove("dot_selected")
	index--
	if (index < 0) {
		index = slides.length-1
	}
	slideDots[index].classList.add("dot_selected")
	banner_img.src = slides[index].image
	text_img.innerHTML = slides[index].tagLine
} )

arrow_right.addEventListener("click",() => {
	const slideDots = document.querySelectorAll(".dots .dot")
	slideDots[index].classList.remove("dot_selected")
	index++
	if (index > slides.length-1) {
		index = 0
	}
	slideDots[index].classList.add("dot_selected")
	banner_img.src = slides[index].image
	text_img.innerHTML = slides[index].tagLine
} )
