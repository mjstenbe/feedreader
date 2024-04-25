function teeAsioita() {
    let kuva = document.querySelector("img");
    kuva.src =
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Bristol.zoo.western.lowland.gorilla.arp.jpg";
    kuva.style.border = "solid 3px black";
    console.log("Kuva on vaihdettu!");
  }

// Etsitään viite ja lisätään kuuntelija + funktio
let nappi = document.querySelector('button')
nappi.addEventListener("click", teeAsioita)

