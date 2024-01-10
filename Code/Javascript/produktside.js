const productstuff = document.querySelector(".produkt-side");
const productName = document.getElementById("produktNavn");
const productImage = document.getElementById("produktBilde");
const productInfo = document.getElementById("produktInfo");
const productPrice = document.getElementById("produktPris")
var products;


// legger til innholdet for produktsiden.
const id = parseInt(window.location.search.split("=")[1]); //få id fra url ved å splitte på = og ta 2. element
fetch("../produkter.json") // henter produkter.json
	.then((response) => response.json()) //konverterer til json
	.then((json) => {
		products = json["produkter"];

		// velg riktig produkt
		product = products[id]

		// enderer html til å vise riktig informasjon
		productName.innerHTML = product["name"]
		productImage.src = product["img"]
		productInfo.innerHTML = product["info"]
		productPrice.innerHTML = product["price"]

	});