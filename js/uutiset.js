let feedit = [
  "https://www.iltalehti.fi/rss/uutiset.xml",
  "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
  "https://www.ecb.europa.eu/rss/statpress.html",
];

for (let i = 0; i < feedit.length; i++) {
  getRSS(feedit[i]);
}

function getRSS(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  // Jäädään odottamaan vastausta
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // document.write( xmlhttp.responseText)
      parseData(xmlhttp.responseXML);
    }
  };
}

function parseData(xml) {
  let taulu = xml.querySelectorAll("item");

  // Esitellään ulkoasu muuttujan sisälle
  let html = ` 
    <table border="1" width="100%" class="table table-striped">
    <thead>
    <tr>
      <th scope="col">Otsikko</th>
      <th scope="col">Julkaisupäivä</th>    
    </tr>
  </thead>
    `;

  for (let i = 0; i < taulu.length; i++) {
    let title = taulu[i].querySelector("title").innerHTML;
    let link = taulu[i].querySelector("link").innerHTML;
    let pubDate = taulu[i].querySelector("pubDate").innerHTML;
    console.log(title, link, pubDate);

    html += `
    <tr>
        <td><a href="${link}">${title}</a></td>        
        <td>${pubDate}</td>
    </tr>
    `;
  }

  html += `</table>`;

  // Etsitään elementti johon sivu sijoitetaan
  //document.write(html);
  document.querySelector("#uutiset").innerHTML += html;
}
