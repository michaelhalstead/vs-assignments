class Player {
  constructor(name, totalCoins, status, hasStar, gameActive) {
    this.name = name
    this.totalCoins = 0
    this.status = 'Big'
    this.hasStar = false
    this.gameActive = true
  }
  setName(namePicked) {
    this.name = namePicked
  }
  gotHit(){
    switch (this.status) {
      case 'Powered Up':
        if (this.hasStar) {
          console.log('Your star protected you!')
          this.hasStar = false
        } else {
          this.status = 'Big'
        }
        break;
      case 'Big':
        this.status = 'Small'
        break;
      case 'Small':
        this.status = 'Dead'
        this.gameActive = false
        break;
    }
  }
  gotPowerUp(){
    switch (this.status) {
      case 'Powered Up':
        this.status = 'Powered Up'
        console.log('Congrats! You got a star!')
        this.hasStar = true
        break;
      case 'Big':
        this.status = 'Powered Up'
        break;
      case 'Small':
        this.status = 'Big'
        break;
    }
  }
  addCoin() {
    this.totalCoins++
  }
  print() {
    console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}${(this.hasStar) ? '\nYou have a star' : ''}\n`)
  }
}

const randomNumber = () => Math.floor(Math.random() * 3)

const thePlayer  = new Player('Luigi')

const gameLoop = () => {
    if (thePlayer.gameActive) {
      switch (randomNumber()) {
        case 0:
          thePlayer.gotHit()
          thePlayer.print()
          break;
        case 1:
          thePlayer.gotPowerUp()
          thePlayer.print()
          break;
        case 2: 
          thePlayer.addCoin()
          thePlayer.print()
          break;
      }
    } else {
      console.log(`GAME OVER\nYour final score was: ${thePlayer.totalCoins}`)
      clearInterval(runGame)
    }
}

const runGame = setInterval(gameLoop, 1000);