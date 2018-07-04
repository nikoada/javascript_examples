// User Interface
var UIController = (function() {

  var DOMObj = {
    uploadBtnObj : document.getElementById('uploadBtn'),
    formObj : document.getElementById('form')
  }

  return {
    DOMObj : DOMObj
  }

})();


// Global
var globalController = (function(UICtrl) {

var setUploadButton = UIController.DOMObj.uploadBtnObj.addEventListener("click", function() {
  UICtrl.DOMObj.formObj.classList.toggle("invisible");
})

return {
  init : setUploadButton
}

})(UIController);


globalController.init;
