// User Interface
var UIController = (function() {

  var DOMObj = {
    uploadBtnObj : document.getElementById('uploadBtn'),
    formObj : document.getElementById('form'),
    uploadFormObj : document.getElementById('uploadForm'),
    fileSelectObj : document.getElementById('file-select'),
    tagsObj : document.getElementById('tags'),
    submitBtnObj : document.getElementById('submit&uploadBtn'),
    flexContainerObj : document.getElementById('flex_container')
  }


  return {
    DOMObj : DOMObj
  }

})();


// Global
var globalController = (function(UICtrl) {

  // get JSON from server
  var getData = function(cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/search');
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('success, status code is 200');

        var data = xhr.responseText;
        var dataObj = JSON.parse(data);

        return cb(dataObj);
      }
    }

    xhr.send();
  }

  // get images from server using JSON from server
  var getImagesFromServer = function() {
    getData(function(dataObj) {
      for (var i = 0; i < dataObj.images.length; i++) {
        var divObj = document.createElement('div')
        divObj.classList.add('p-2');
        UICtrl.DOMObj.flexContainerObj.appendChild(divObj);
        var imgObj = document.createElement('img');
        imgObj.classList.add('rounded');
        imgObj.src = "http://localhost:3000/images/" + dataObj.images[i].image;
        divObj.appendChild(imgObj);
      }
    });
  }


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
    loadServer : getData,
    displayGalery : getImagesFromServer(),
    init : setUploadButton,
    setSubmit : form.onsubmit
  }

})(UIController);


globalController.getImagesFromServer;
globalController.init;
globalController.setSubmit;
