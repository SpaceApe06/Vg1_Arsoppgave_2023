const produktContainer = document.querySelector(".produkt-container");

// legger til mellomrom
function numberWithSpaces(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Dette lager elementer
function addProduct(name, price, category, img, id){
	// Lager elementer
	let produkt = document.createElement("a");
	let produktName = document.createElement("h1");
	let produktpris = document.createElement("p");

	// Konfigurerer elementer
	produkt.classList = "produkt";
	produkt.style.backgroundImage = `url(${img})`;
	produkt.href = `./html/produkt.html?id=${id}`;
	produktName.innerHTML = name;
	produktpris.innerHTML = `${numberWithSpaces(price)} kr`;

	// Lager HTML
	produkt.appendChild(produktName);
	produkt.appendChild(produktpris);

	// Legger til produktet i html
	produktContainer.appendChild(produkt);
}

// Henter informasjoen om produkted og bilde fra json listen, og legger de til html
fetch("/produkter.json") // hent produkter.json
	.then((response) => response.json()) // konverter response til json
	.then((json) =>
		json["produkter"].forEach((product) => { // for hvert produkt
			// sett produkt id
			let productID = json["produkter"].findIndex((productFind) => productFind.name === product["name"]);

			// legg til produkt med riktig informasjon
			addProduct(product["name"], product["price"], product["category"], product["img"], productID);
		})
	);