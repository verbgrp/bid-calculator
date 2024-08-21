function calculateDifference() {
    var plannedBudget = parseFloat(document.getElementById("planned-budget").value);
    var actualSpending = parseFloat(document.getElementById("actual-spending").value);
  
    var difference = plannedBudget - actualSpending;
    var percentageDifference = (difference / plannedBudget) * 100;
  
    document.getElementById("planned-amount").innerText = plannedBudget.toFixed(2);
    document.getElementById("actual-amount").innerText = actualSpending.toFixed(2);
    document.getElementById("difference").innerText = Math.abs(difference).toFixed(2);
    document.getElementById("percentage-difference").innerText = percentageDifference.toFixed(2);
  
    var feedback = "";
    if (difference > 0) {
      feedback = "You spent less than planned!";
    } else if (difference < 0) {
      feedback = "You overspent your budget!";
    } else {
      feedback = "You spent exactly your planned budget!";
    }
    document.getElementById("feedback").innerText = feedback;
  
    document.getElementById("result").style.display = "block";
  }
  