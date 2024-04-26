let url = "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=json&APPID=ff64c247a136f706923d1ee0d55d71e2"

// Luodaan ja lähetetään AJAX kutsu
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET",url,true);
xmlhttp.send();
// Jäädään odottamaan vastausta
xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
        // Tulostetaan se ruudulle
       // document.write( xmlhttp.responseText)
        // Kutsutaan funktiota joka hoitaa loput
        parsiData( xmlhttp.responseText );
  }
}

function parsiData(data){

    // Muutetaan teksti JSONiksi
    json = JSON.parse( data )
    // console.log( json.name, json.main.temp, json.weather[0].main )

    // Esitellään ulkoasu muuttujan sisälle
   let html = 
   `
   <h1>Sääsovellus v. 1.1 </h1>
   <table border="1">
    <tr>
        <td>City</td>
        <td>${json.name}</td>
    </tr>
        <td>Temp</td>
        <td>${json.main.temp}</td>
    </tr>
        <td>Description</td>
        <td>${json.weather[0].main}</td>
    </tr>
   </table>
   `
   // Tulostetaan ruudulle
   document.write(html)

}
