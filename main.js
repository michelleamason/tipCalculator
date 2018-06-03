// calculate Tip
function calculateTip() {
  var bill = document.getElementById("bill").value;
  var percentage = document.getElementById("percentage").value;
  var numOfPeople = document.getElementById("splitAmount").value;

  // validate input
  if (bill === "" || percentage == 0) {
    alert("Enter values");
    return;
  }
  // Check the input
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // calculate tip
  var total = (bill * percentage) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;

  // next line allows us to always have two digits after decimal point
  total = total.toFixed(2);

  // display tip
  document.getElementById("tip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

// Hide tip
document.getElementById("tip").style.display = "none";
document.getElementById("each").style.display = "none";

// click to call
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
