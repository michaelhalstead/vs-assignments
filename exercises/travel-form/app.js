document.getElementById('submitBtn').addEventListener('click', function(){
    var checkboxes = document.getElementsByName('diet');
    var diet = [];
    for (var i=0; i<checkboxes.length; i++) {
       if (checkboxes[i].checked) {
          diet.push(checkboxes[i].value);
       }
    }
    let fn = document.querySelector('input[name=\'first\']').value;
    let ln = document.querySelector('input[name=\'last\']').value;
    let gen = document.querySelector('input[name=\'gender\']:checked').value;
    let loc = document.querySelector('select[name=\'location\']').value;
    alert('First name: ' + fn + '\nLast name: ' + ln + '\nGender: ' + gen + '\nDestination: ' + loc + '\nDietary restrictions: ' + diet.join(', '));
});