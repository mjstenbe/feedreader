let url = "http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=json&APPID=ff64c247a136f706923d1ee0d55d71e2"

// Luodaan ja lähetetään AJAX kutsu
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET",url,true);
xmlhttp.send();
// Jäädään odottamaan vastausta
xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
        // Tulostetaan se ruudulle
        document.write( xmlhttp.responseText)
  }
}