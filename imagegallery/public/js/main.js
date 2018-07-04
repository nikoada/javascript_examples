// User Interface
var UIController = (function() {

  var DOMObj = {
    uploadBtnObj : document.getElementById('uploadBtn'),
    formObj : document.getElementById('form'),
    flexContainerObj : document.getElementById('flex_container')
  }


  return {
    DOMObj : DOMObj
  }

})();


// Global
var globalController = (function(UICtrl) {

var setUploadButton = UICtrl.DOMObj.uploadBtnObj.addEventListener("click", function() {
  UICtrl.DOMObj.formObj.classList.toggle("invisible");
  UICtrl.DOMObj.flexContainerObj.classList.toggle("invisible");
  if (UICtrl.DOMObj.uploadBtnObj.innerHTML === "Upload image") {
    UICtrl.DOMObj.uploadBtnObj.innerHTML = "Back to the gallery";
  } else {
    UICtrl.DOMObj.uploadBtnObj.innerHTML = "Upload image";
  }
})

return {
  init : setUploadButton
}

})(UIController);


globalController.init;
