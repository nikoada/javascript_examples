var serverController = (function() {

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
  var loadImages = function(param) {
    getData(function(dataObj) {
      for (var i = 0; i < dataObj.images.length; i++) {
        var divObj = document.createElement('div')
        divObj.classList.add('p-2');
        param.appendChild(divObj);
        var imgObj = document.createElement('img');
        imgObj.classList.add('rounded');
        imgObj.src = "http://localhost:3000/images/" + dataObj.images[i].image;
        imgObj.setAttribute('id',i);
        imgObj.setAttribute('onclick', "globalController.setModal(this)");
        divObj.appendChild(imgObj);
      }
    });
  }

  return {
    loadImages : loadImages
  }

})();


// User Interface
var UIController = (function() {

  var DOMObj = {
    uploadBtnObj : document.getElementById('uploadBtn'),
    formObj : document.getElementById('form'),
    uploadFormObj : document.getElementById('uploadForm'),
    fileSelectObj : document.getElementById('file-select'),
    tagsObj : document.getElementById('tags'),
    submitBtnObj : document.getElementById('submit&uploadBtn'),
    flexContainerObj : document.getElementById('flex_container'),
    imgTagObj : document.getElementsByTagName('IMG'),
    modal : document.getElementById('myModal')
  };

  return {
    DOMObj : DOMObj
  }

})();


// Global
var globalController = (function(UICtrl) {

  serverController.loadImages(UICtrl.DOMObj.flexContainerObj)

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
  setModal: function(elmnt) {
    // alert(elmnt.id);
    var actImgObj = document.getElementById(elmnt.id);
    var modalBodyObj = document.getElementById('modal-body');
    modalBodyObj.appendChild(actImgObj);
    UICtrl.DOMObj.modal.style.display = 'block';

  }
}

})(UIController);

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == UIController.DOMObj.modal) {
//         UIController.DOMObj.modal.style.display = "none";
//     }
// }


// var serverController = (function (){
//
//   var images=[];
//
//
//   return {
//
//     loadImages : function()
//     {
//       console.log("loadImages...");
//       var xhr = new XMLHttpRequest();
//       xhr.open('GET', 'http://localhost:3000/search');
//       xhr.onload = function() {
//         if (xhr.status === 200) {
//           console.log('success, status code is 200');
//
//           var dataResult = xhr.responseText;
//           var dataObj = JSON.parse(dataResult);
//           images=dataObj.images;
//         }
//       }
//
//       xhr.send();
//
//     },
//
//     getImages : images
//   }
//
// })();
//
// var UIController = (function (){
//
//   var DOMObj = {
//     uploadBtnObj : document.getElementById('uploadBtn'),
//     formObj : document.getElementById('form'),
//     uploadFormObj : document.getElementById('uploadForm'),
//     fileSelectObj : document.getElementById('file-select'),
//     tagsObj : document.getElementById('tags'),
//     submitBtnObj : document.getElementById('submit&uploadBtn'),
//     flexContainerObj : document.getElementById('flex_container'),
//     imgTagObj : document.getElementsByTagName('IMG')
//   };
//
//   return {
//     DOMObj: DOMObj
//   }
//
// })();
//
// var commonController = (function(serverCtrl,UICtrl){
//
//
// var setupEventListners = function () {
// //bind all evnet
//
// };
//
//   return {
//
//     init: function()
//     {
//       serverCtrl.loadImages();
//       console.log(serverCtrl.getImages);
//     }
//   }
//
// })(serverController,UIController);
//
// commonController.init();
