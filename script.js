document.getElementById("CalcBtn").addEventListener("click", calcAverage);

function calcAverage() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let num3 = parseInt(document.getElementById("num3").value);

  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let prod = num1 * num2 * num3;
  let r = num1 % num2;
  let p = num1 ** num2;
  let rnd = num1.toFixed(2);
  let tan = Math.tan(num3);
  var rand = Math.random() * (num2 - num1 + 1) + num1;
  rand = Math.floor(rand);

  document.getElementById("aveOut").innerHTML = average;
  document.getElementById("sumout").innerHTML = sum;
  document.getElementById("prodout").innerHTML = prod;
  document.getElementById("rout").innerHTML = r;
  document.getElementById("pout").innerHTML = p;
  document.getElementById("rndout").innerHTML = rnd;
  document.getElementById("tanout").innerHTML = tan;
  document.getElementById("randnum").innerHTML = rand;
}
