var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

let temp = [];

let playSong = function(){
    console.log(lyrics.join(" "))
}

let playBackward = function(){
    console.log(lyrics.reverse().join(' '))
}

let everyOther = function(){
    for (i = 0; i < lyrics.length; i+=2) {
        temp.push(lyrics[i])
    }
    console.log(temp.join(' '))
    temp = [];
}

let swapTwos = function(){
    for (i = 0; i < lyrics.length; i++) {
        if (i % 2 !== 0) {
            temp.push(lyrics[i])
            temp.push(lyrics[i-1])
        }
    }
    return temp.join(' ')
    temp = []
}