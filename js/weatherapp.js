let url =
  "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=json&APPID=ff64c247a136f706923d1ee0d55d71e2";

// Luodaan ja lähetetään AJAX kutsu
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", url, true);
xmlhttp.send();
// Jäädään odottamaan vastausta
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    // Tulostetaan se ruudulle
    // document.write( xmlhttp.responseText)
    // Kutsutaan funktiota joka hoitaa loput
    parsiData(xmlhttp.responseText);
  }
};

function parsiData(data) {
  // Muutetaan teksti JSONiksi
  json = JSON.parse(data);
  // console.log( json.name, json.main.temp, json.weather[0].main )

  // Esitellään ulkoasu muuttujan sisälle
  let html = `
   <h1>Sääsovellus v. 1.1 </h1>
   <table border="1" width="100%">
    <tr>
        <td>City</td>
        <td>${json.name}</td>
    </tr>
        <td>Temp</td>
        <td>${json.main.temp} &deg;C </td>
    </tr>
        <td>Description</td>
        <td>${json.weather[0].main}</td>
    </tr>
    </tr>
        <td>Wind</td>
        <td>${json.wind.speed} m/s</td>
    </tr>
    </tr>
        <td>Icon</td>
        <td><img src="http://openweathermap.org/img/w/${json.weather[0].icon}.png"></td>
    </tr>
   </table>
   `;
  // Etsitään elementti johon sivu sijoitetaan
  //document.write(html);
  document.querySelector('#main').innerHTML = html;
}
