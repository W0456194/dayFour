var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var data = JSON.parse(request.responseText);
    console.log(data);
    data.forEach(element => {
        console.log(element.name);
        console.log(element.region);
        console.log(element.subregion);
        console.log(element.population);
        console.log(element.flags.png);
    });


}
