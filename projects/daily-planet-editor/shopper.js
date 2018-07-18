var shopper = {  
    name: 'Emeril',
    age: 58,
    isChef: true,
    specialty: "Italian food"
 }

 function myShopper() {
     var isChef = shopper.isChef;
     var chefVal = () => {
        if (isChef) {
            return("are a professional chef,")
        } else {
            return("love to cook in their free time,")
        }
    }
    return("Today's shopper is " + shopper.name + ". They " + chefVal() + " are " + shopper.age + ", and specialize in " + shopper.specialty + ".");
 }

 console.log(myShopper());