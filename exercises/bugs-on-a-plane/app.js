var form = document.getElementById("airline-form");

document.getElementById('submit').addEventListener("click", formAlert);

function formAlert() {
    var firstName = form.elements.namedItem("first-name").value;
    var lastName = form.elements.namedItem("last-name").value;
    var age = form.elements.namedItem("age").value;
    var gender = form.elements.namedItem("gender").value;
    var location = form.elements.namedItem("travel-location").value;
    var diet = [];
    if (form.elements.namedItem('vegan').checked) {
        diet.push(form.elements.namedItem('vegan').value);
    }
    if (form.elements.namedItem('gluten').checked) {
        diet.push(form.elements.namedItem('gluten').value);
    }
    if (form.elements.namedItem('paleo').checked) {
        diet.push(form.elements.namedItem('paleo').value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet.join(', ') + "\nAwesome, now if you die, it won't be an accident..");
}