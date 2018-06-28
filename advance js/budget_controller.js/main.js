var switchBtnObj = document.getElementById("switchBtn");
switchBtnObj.style.color = "green";

switchBtnObj.addEventListener("click", function() {
  if (switchBtnObj.innerHTML == "+") {
    switchBtnObj.innerHTML = "-";
    switchBtnObj.style.color = "red";
  } else {
    switchBtnObj.innerHTML = "+";
    switchBtnObj.style.color = "green";
  }
});

var budgetController = (function() {

  var income = 0;

  return {
    addIncome : function(value) {
      if (Number(value)) {
        income += Number(value);
      } else {
        alert("Please enter a number value without comma.");
      }
    },
    actualIncome : function() { return income; }
  }

})();


var UIController = (function() {
  var incomeDisObj = document.getElementById("income");
  var inputDes = document.getElementById("inputDes");
  var inputVal = document.getElementById("inputVal");
  var incomeTableObj = document.getElementById('incomeTable');
  var submitBtnObj = document.getElementById("submitBtn");



  var addRaw = function(inDescroption, inValue) {
    var trObj = document.createElement('tr');
    var tdObj = document.createElement('td');
    var pObj = document.createElement('p');
    tdObj.innerHTML = inDescroption;
    pObj.innerHTML = '+' + inValue;
    incomeTableObj.appendChild(trObj).appendChild(tdObj).appendChild(pObj);
  };

  return {
    submitBtn : submitBtnObj,
    getInput : function() { return inputVal.value; },
    updateUI : function(value) { incomeDisObj.innerHTML =  value; },
    clearField : function() { inputVal.value = ""; },
    addTableRaw : addRaw
  }

})();


var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListerner = function() {

    UICtrl.submitBtn.addEventListener("click", function() {
      updateBudget();
      UICtrl.updateUI("+ " + budgetCtrl.actualIncome());
      UICtrl.addTableRaw(null,UICtrl.getInput());

      // clears inputfields
      UIController.clearField();
    });
  };

  var updateBudget = function() {
    budgetCtrl.addIncome(UICtrl.getInput());
  };

  return {
    init : function() {
      setupEventListerner();
      //UICtrl.displayBudget();
    }
  }

}) (budgetController, UIController);

controller.init();
