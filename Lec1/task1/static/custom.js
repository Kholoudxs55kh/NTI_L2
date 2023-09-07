window.onload = function(){

    var form = document.querySelector('form');
    var num1 = document.getElementById('num1');
    var op = document.getElementById('op');
    var num2 = document.getElementById('num2');
    var resultprint = document.querySelector('h2');

    // event listener to the form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // prevent the form from refreshing

      var number1 = num1.value;
      var number2 = num2.value;
      var operation = op.value;
      var result;


      // if (typeof(number1) !== 'number' || typeof(number2) !== 'number') {
      //   resultprint.textContent = 'Result: Invalid Input. Please Enter valid numbers.' ;
      //   return;
      // }
      if (isNaN(number1) || isNaN(number2)) {
        resultprint.textContent = 'Result: Invalid Input. Please enter valid numbers.';
        return;
      }

      number1 = parseFloat(number1);
      number2 = parseFloat(number2)


      switch (operation) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
        case '/':
          result = number1 / number2;
          break;
        case '*':
          result = number1 * number2;
          break;
        default:
          result = 'Choose Valid Operation';
      }

      resultprint.textContent = 'Result: ' + result;
    });
  };
