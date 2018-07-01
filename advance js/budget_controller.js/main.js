var budgetController = (function() {

  var income = 0;
  var expenses = 0;

  return {
    addIncome : function(value) { income += value; },
    addExpenses : function(value) { expenses += value; },
    actualIncome : function() { return income; },
    actualExpenses : function() { return expenses; }
  }

})();


var UIController = (function() {
  var switchBtnObj = document.getElementById("switchBtn");
  var balanceObj = document.getElementById('balance');
  var incomeDisObj = document.getElementById("income");
  var expensesDisObj = document.getElementById('expenses')
  var inputDes = document.getElementById("inputDes");
  var inputVal = document.getElementById("inputVal");
  var incomeTableObj = document.getElementById('incomeTable');
  var expensesTableObj = document.getElementById('expensesTable');
  var submitBtnObj = document.getElementById("submitBtn");

  function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    incomeTable.deleteRow(i);
  }

  var addRaw = function(inDescroption, inValue) {
    var trObj = document.createElement('tr');
    var tdObj = document.createElement('td');
    var pObj = document.createElement('p');
    var deleteObj = document.createElement('input');
    deleteObj.type = "button";
    deleteObj.value = "x";
    deleteObj.setAttribute("onclick", "var i = this.parentNode.parentNode.rowIndex; incomeTable.deleteRow(i);");
    tdObj.innerHTML = inDescroption;


    if (switchBtnObj.innerHTML == "+") {
      pObj.innerHTML = '+ ' + inValue;
      incomeTableObj.appendChild(trObj).appendChild(tdObj).appendChild(pObj);
      incomeTableObj.appendChild(trObj).appendChild(tdObj).appendChild(deleteObj);
    } else {
      pObj.innerHTML = '- ' + inValue;
      incomeTableObj.appendChild(trObj).appendChild(cancelObj);
      expensesTableObj.appendChild(trObj).appendChild(tdObj).appendChild(pObj);
    }

  };

  return {
    balance : balanceObj,
    submitBtn : submitBtnObj,
    switchBtn : switchBtnObj,
    getInput : function() { return inputVal.value; },
    getDescription : function() { return inputDes.value; },
    updateUI : function(inValue, exValue) {
      if (inValue !== 0) {
        incomeDisObj.innerHTML = "+ " + inValue;
      }
      if (exValue !== 0) {
        expensesDisObj.innerHTML = "- " + exValue;
      }
      },
    clearField : function() { inputVal.value = ""; inputDes.value = "";},
    addTableRaw : addRaw
  }

})();


var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListerner = function() {

    UICtrl.submitBtn.addEventListener("click", function() {
      updateBudgetAndUI();
      UICtrl.updateUI(budgetCtrl.actualIncome(), budgetCtrl.actualExpenses());

      // clears inputfields
      UICtrl.clearField();
      UICtrl.balance.innerHTML = budgetCtrl.actualIncome() - budgetCtrl.actualExpenses();
    });

    UICtrl.switchBtn.addEventListener("click", function() {
      if (UICtrl.switchBtn.innerHTML == "+") {
        UICtrl.switchBtn.innerHTML = "-";
        UICtrl.switchBtn.style.color = "red";
      } else {
        UICtrl.switchBtn.innerHTML = "+";
        UICtrl.switchBtn.style.color = "green";
      }
    });

  };

  var updateBudgetAndUI = function() {
    if (Number(UICtrl.getInput()) && UICtrl.getDescription() !== "") {
      if (UICtrl.switchBtn.innerHTML === "+") {
        budgetCtrl.addIncome(Number(UICtrl.getInput()));
      } else {
        budgetCtrl.addExpenses(Number(UICtrl.getInput()));
      }
      UICtrl.addTableRaw(UICtrl.getDescription(),UICtrl.getInput());
    } else {
      alert("Please enter both description and number");
    }
  };

  return {
    init : function() {
      setupEventListerner();
      //UICtrl.displayBudget();
    }
  }

}) (budgetController, UIController);

controller.init();
