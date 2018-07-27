document.getElementById('submitBtn').addEventListener('click', function(){
    let checkboxes = document.getElementsByName('diet');
    let diet = [];
    for (var i=0; i<checkboxes.length; i++) {
       (checkboxes[i].checked) ? diet.push(checkboxes[i].value) : null
    }
    let fn = document.querySelector('input[name=\'first\']').value;
    let ln = document.querySelector('input[name=\'last\']').value;
    let gen = document.querySelector('input[name=\'gender\']:checked').value;
    let loc = document.querySelector('select[name=\'location\']').value;
    alert('First name: ' + fn + '\nLast name: ' + ln + '\nGender: ' + gen + '\nDestination: ' + loc + '\nDietary restrictions: ' + diet.join(', '));
});