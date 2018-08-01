// price-calculator for PinGeorgia

// calculate price
var priceCalculator = (function() {

  var prices = {
    adult: 50,
    kid: 40,
    startTour: {
      batumi: 30,
      kutaisi: 20
    acomodation: {
      guesthaus: 30,
      hotel: 50
    };
    meal: {
      breakfast: 20;
      lunch: 35;
    }
  }

  return {
    calculator: function (adultsParam, kidsParam, startTourParam,
    endTourParam, acomodationParam, mealParam) {
      var output = 0;
      output += (adultsParam * prices.adult) + (prices.kid * kidsParam);
      output += startTourParam + endTourParam + acomodationParam + mealParam;

      return output
  }

})();

// user-interface controller
var UIController = (function() {

  var DOMStrings = {
    inputAdults: 'add-adults',
    kids: 'add-kids',
    startTour: 'add-start-tour',
    endTour: 'add-end-tour',
    acomodation: 'add-acomodation',
    meal: 'add-meal',
    output: 'output',
    submitBtn: 'submit'
  }

  return {
    getDOMStrings: function() {
      return DOMStrings;
    }
})();

// global controller
var global = (function(CtrlPrice, CtrlUI) {

  var DOM = CtrlUI.getDOMStrings();
  document.querySelector(DOM.submitBtn).addEventListener('change', )


})(priceCalculator, UIController);
