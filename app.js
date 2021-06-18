var uiController = (function () {
  var x = 100;
  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      a = add(a);
      console.log("Боловсруулсан утга: " + a);
    },
  };
})();

var financeController = (function () {})();
// uiController bolon financeController 2iig holbogch funkts
var appController = (function (uiController, financeController) {
  uiController.publicAdd(50);
})(uiController, financeController);

var hunController = (function () {
  var bodol = "Javascript uneheer yadargatai yum.";
  function tsusGuih() {
    console.log("zail");
    return "uh";
  }
  function huchilturugchiigAgaaraasAvjTsusruuOruulah() {
    console.log("sha");
    return "shine";
  }
  return {
    yarih: function () {
      bodol = "Javascript bol lag";
      console.log("Hi!");
    },
  };
})();
