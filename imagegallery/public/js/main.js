var UIController = (function() {

  var DOMObj = {
    uploadBtnObj : document.getElementById('uploadBtn'),
    formObj : document.getElementById('form')
  }

  return {
    DOMObj : DOMObj
  }

})();

var gobalController = (function(UICtrl) {

var setUploadButton = UIController.DOMObj.uploadBtnObj.addEventListener("click", function() {
  if (UICtrl.DOMObj.formObj.style.display === "none") {
    UICtrl.DOMObj.formObj.style.display = "block";
  } else {
    UICtrl.DOMObj.formObj.style.display = "none";
  }
  console.log("jap " + UICtrl.DOMObj.formObj.style)
})

return {
  init : setUploadButton
}

})(UIController);

gobalController.init;
