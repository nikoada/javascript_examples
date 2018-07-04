var UIController = (function() {

  var DOMObj = {
    uploadBtnObj : document.getElementById('uploadBtn'),
    formObj : document.getElementById('form')
  }

  return {
    DOMObj : DOMObj
  }

})();

var gobalController = (function() {

var setUploadButton = UIController.DOMObj.uploadBtnObj.addEventListener("click", function() {
  console.log("inside setUploadButton")
})

return {
  init : setUploadButton()
}

})();

gobalController.init();
