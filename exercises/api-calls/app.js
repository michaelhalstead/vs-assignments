// HTTP & the Internet //

  // Http: HyperText Transfer Protocol
      // The set of protocols( rules ) that govern how data is transferred between web servers and web browsers.

  // Internet Protocol  (IP) Address: 
      // Unique address for your PC.    0 - 255:  48.120.4.39


  // Server
      // Main job is to 'listen' for requests, and 'eventually' send the data to the client.
        // Remote - A separate machine from your system.
        // Local  - A server running on your actual pc.
        // server.listen()

  // API 
      // The code inside of the server that handles actually getting or saving the data per the user's requests.


  // Request - Response cycle

  // C-R-U-D
        // Http:
        // Post: create
        // Get: Read
        // Put: Update
        // Delete: Delete

// AJAX - Asynchronous Javascript and XML (eXtensible Markup Language)

    //readystate, onreadystatechange
var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200) {
        // parsing is turning raw JSON data (string) into a JS object we can access
        let chars = JSON.parse(xhr.responseText);
        displayData(chars);
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
xhr.send()

let displayData = function(imp){
    var display = document.getElementById('list')
    var pokemon = imp.objects[0].pokemon

    for (let i = 0; i < pokemon.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = pokemon[i].name
        display.appendChild(li)
    }
}

var axios = require('axios')

var lukeSkywalker = axios.get('https://swapi.co/api/people/1').then(function(response){
    console.log(reponse)
})
