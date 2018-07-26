let butts = [].slice.call(document.querySelectorAll("input[type='button'"));
let innies = [].slice.call(document.querySelectorAll("input[type='number'"));

butts.forEach(function (element){
  element.addEventListener("click", myCoins)
});

innies.forEach(function (element){
    element.addEventListener("click", function(){
        this.select();
    })
});

innies.forEach(function (element){
    element.addEventListener("input", myCoins)
});

 function myCoins() {
    let parent = this.parentElement;
    let thisQuan = parent.querySelector('input[type=\'number\']');
    let allQuan = document.querySelectorAll('input[type=\'number\'');
    let coins = document.getElementById('result');
    let temp;
    
    switch(this.value) {
        case '+':
            thisQuan.value++
            temp = allQuan[0].value*5 + allQuan[1].value*11 + allQuan[2].value*7;
            coins.innerHTML = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
        case '-':
            if (thisQuan.value > 0) {
                thisQuan.value--
            }
            temp = allQuan[0].value*5 + allQuan[1].value*11 + allQuan[2].value*7;
            coins.innerHTML = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
        default:
            if (this.value == "") {
                this.value = 0;
            } else if (this.value.length > 8) {
                this.value = this.value.slice(0, 8);
            }
            temp = allQuan[0].value*5 + allQuan[1].value*11 + allQuan[2].value*7;
            coins.innerHTML = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
    }
  }