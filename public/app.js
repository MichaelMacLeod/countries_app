window.onload = function(){
  console.log('App started');
  var url = 'https://restcountries.eu/rest/v1'
  var request = new XMLHttpRequest();

//We want to make a GET request to our URL, with this.
  request.open("GET", url)
;
//Now start defining the asynchronous actions for what we want to do when we have the info being sent back to us from the request object: 

request.onload = function(){
  if(request.status === 200){
    console.log("Got the data!");
    // console.log(request.responseText);
    var useful = JSON.parse(request.responseText);
    console.log(useful[0].name);
  }
}

request.send(null);

};
