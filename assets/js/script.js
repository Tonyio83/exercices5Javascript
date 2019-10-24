function validate(){
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  alert(Math.round(firstNumber) * Math.round(secondNumber));
}
