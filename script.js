const inputC = document.getElementById("numC");
const inputF = document.getElementById("numF");

const CtoF = function (c) {
  const C = parseFloat(c);
  const fahrenheit = c * 1.8 + 32;
  inputF.value = fahrenheit;
};

CtoF(inputC.value);

const FtoC = function (f) {
  const fr = parseFloat(f);
  const celsius = (fr - 32) / 1.8;
  inputC.value = celsius;
  console.log(this);
};

FtoC(inputF.value);
