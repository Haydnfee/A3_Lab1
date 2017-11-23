(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var carSelect = document.querySelectorAll('.data-ref'),
    carModel = document.querySelector('.modelName h4'),
    carPrice = document.querySelector('.priceInfo p'),
    carDesc = document.querySelector('.modelDetails p'),

    function changeName() {
    document.querySelector(".modelname").innerHTML = '';
    console.log('fired');
   }
   
   document.querySelector(carSelect).addEventListener("click", changeName, false)

})();
