var countries = [] 

var loadCountries = function(){

  for (var i = 0; i < countries.length;  i++){
  var countryName = document.createElement("option");
  countryName.innerText = countries[i].name;
  
  var countryList = document.querySelector("select");
  countryList.appendChild(countryName);
  }
}

var selectedName = function(){
  //Json save to local storage and string. Parse and select name... look at var for film of films.

  var name = document.getElementById("s1").value
  var result = _.find(countries, function(o){return o.name === name;})
 
var countryTitle = document.querySelector(".country-name");
countryTitle.innerText = result.name;

var countryPopulation = document.querySelector(".population");
countryPopulation.innerText = "Population: " + Number( result.population ).toLocaleString();;

var countryCapital = document.querySelector(".capital");
countryCapital.innerText = "Capital city: " +result.capital;

}


window.onload = function(){  
  console.log('App started');
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();
  request.open("GET", url)

  request.onload = function(){
    if(request.status === 200){
      console.log('got the data')
      //console.log(request.responseText)
      countries = JSON.parse(request.responseText );
     
      loadCountries();
      selected = document.getElementById("s1")
      selected.onchange = selectedName;
    }
  }

  request.send(null)

};