let butts = [].slice.call(document.querySelectorAll("button"));

butts.forEach(function (element){
  element.addEventListener("click", function(){
    let parent = this.parentElement;
    let num1 = Number(parent.querySelector('input').value);
    let num2 = Number(parent.querySelector('input:last-of-type').value);
    let result = parent.querySelector('h1');
    let temp;
    
    switch(parent.id) {
        case 'sqMinus':
            temp = Math.pow(num1,2) - Math.pow(num2,2);
            result.innerHTML = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
        case 'sqPlus':
            temp = Math.pow(num1,2) + Math.pow(num2,2);
            result.innerHTML = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
        case 'sqCombo':
            temp = Math.pow(num1+num2,2);
            result.innerHTML = temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
    }
  });
});

console.log((Math.pow(10,2)+Math.pow(5,3)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));