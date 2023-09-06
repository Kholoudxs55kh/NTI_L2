// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the form elements
  var form = document.querySelector('form');
  var numberInput = document.querySelector('input[type="number"]');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    var number = parseInt(numberInput.value);


    var Multiplicand = '';
    var Multiplier = '';
    var Product ='';

    for (var i = 1; i <= 10; i++) {
      Multiplicand += '<div>' + number + '</div>';
      Multiplier += '<div>' + i + '</div>';
      Product += '<div>' + (number * i) + '</div>';
    }

    var Multiplicandprint = document.querySelector("#number");
    Multiplicandprint.innerHTML = 'Multiplicand' + Multiplicand;

    var Multiplierprint = document.querySelector("#multiblier");
    Multiplierprint.innerHTML = 'Multiplier' + Multiplier;

    var Productprint = document.querySelector('#result');
    Productprint.innerHTML = 'Product' + Product;
  });
});