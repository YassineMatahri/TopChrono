const APIKEY = "df955a359c3c82d1bd6a23aa047b58d0";

let url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=df955a359c3c82d1bd6a23aa047b58d0&units=metric&lang=fr"
 

fetch(url).then(response =>
    response.json().then(data => {
        console.log(data);
    document.querySelector('#ville').innerHTML = "<i class='fas fa-map-pin logoJavaS'></i>" + data.name;
    document.querySelector('#temps').innerHTML = " <i class='fas fa-thermometer-half logoJavaS'></i>  " + data.main.temp + "°";
    document.querySelector('#humidite').innerHTML = " <i class='far fa-humidity logoJavaS'></i>  " + data.main.humidity + "%";

    
    })
    );














//var callBackGetSuccess = function(data){
//     console.log("Donnees api data");
// }


// function buttonClickGET() {
// var url = "http://api.openweathermap.org/data/2.5/weather?id=524901&appid={API key}&lang={lang}";


//     $.get(url, callBackGetSuccess).done(function() {
//         //alert( "second success" );
//       })
//       .fail(function() {
//         alert( "error" );
//       })
//       .always(function() {
//         //alert( "finished" );
//       });
// }