// koden gjør at når man trykker på legg til handlekurv så vil den hente id-ene til produktet og legge det i local storage. 
//Dette vil gjøre sån at produktet dukker op i handlekurv nettsiden vis man har show cart.
let cart;

if (localStorage.lagretHandlekurv) {
    cart = localStorage.lagretHandlekurv // gjør at variablen cart er det samme som localstorage.handlekurv
}

else {
    cart = "";
}
let G502 = "<p id='cartProduct'>Logitech G502 900 kr</p>"

let VR = "<p id='cartProduct'>Meta Quest 2 5859 kr</p>"

let PS5 = "<p id='cartProduct'> Playstation 5 6000 kr</p>"

let Controller = "<p id='cartProduct'>Playstation 5 kontroller 899 kr</p>"

let Headsett = "<p id='cartProduct'>Steelseries Artics Pro 3095 kr</p>"

let Canon = "<p id='cartProduct'>Canon 12395 kr</p>"

let Iphone = "<p id='cartProduct'>iPhone 14 Pro Max 15290 kr</p>"

let LG_Tv = "<p id='cartProduct'>LG UQ75 4K LCD TV(2022) 8490 kr</p>"

let Galaxy = "<p id='cartProduct'>Samsung Galaxy S23 Ultra 16990 kr</p>"

let S_Tv = "<p id='cartProduct'>Samsung Tv 5490 kr</p>"

function addToCart() {
    alert("Produktet har blitt lagt") //når man trykker på legg til handlekurv knappen så sender det en alert som informerer at produktet har blit lagt til
    
    // Henter id-ene til produktene fra serch baren på browseren og hvis id-en er 1 så vil den kjøre funksjonen buyVR
    const id = parseInt(window.location.search.split("=")[1]); //få id fra url ved å splitte på = og ta 2. element
    console.log(id)
    if (id === 0) {
        buyG502()
    }

    if (id === 1) {
        buyVR()
    }

    if (id === 2) {
        buyPS5()
    }
    
    if (id === 3) {
        buyController()
    }

    if (id === 4) {
        buyHeadsett()
    }

    if (id === 5) {
        buyCanon()
    }
    if (id === 6) {
        buyIphone()
    }

    if (id === 7) {
        buyLG_Tv()
    }

    if (id === 8) {
        buyGalaxy()
    }

    if (id === 9) {
        buyS_Tv()
    }
}
// disse funksjonene gjør at produktene blir lagt til i localstorage.

function buyG502() {
    cart += G502
    localStorage.setItem("lagretHandlekurv", cart)
}

function buyVR() {
    cart += VR
    localStorage.setItem("lagretHandlekurv", cart)

}

function buyPS5() {
    cart += PS5
    localStorage.setItem("lagretHandlekurv", cart)

}

function buyController() {
    cart += Controller
    localStorage.setItem("lagretHandlekurv", cart)
}

function buyHeadsett() {
    cart += Headsett
    localStorage.setItem("lagretHandlekurv", cart)

}

function buyCanon() {
    cart += Canon
    localStorage.setItem("lagretHandlekurv", cart)
}

function buyIphone() {
    cart += Iphone
    localStorage.setItem("lagretHandlekurv", cart)

}

function buyLG_Tv() {
    cart += LG_Tv
    localStorage.setItem("lagretHandlekurv", cart)

}

function buyGalaxy() {
    cart += Galaxy
    localStorage.setItem("lagretHandlekurv", cart)

}

function buyS_Tv() {
    cart += S_Tv
    localStorage.setItem("lagretHandlekurv", cart)
}

// viser produktene som har blitt lagt til i local storage
function showCart () {
    document.getElementById("cart").innerHTML = localStorage.lagretHandlekurv;
}

//gjør at local storage blir resetet tilbake til å ha ingenting også blir det vist.
function emptyCart() {
    cart = "";
    localStorage.setItem("lagretHandlekurv", cart)    
    
    showCart()
}
// gjør sånn at produktene er synlig med en gang når du kommer inn i nettsiden
showCart()