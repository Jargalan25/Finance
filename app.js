// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();
// Санхүүтэй ажиллах контроллер
var financeController = (function () {})();
// Программын холбогч контроллер
var appController = (function (a, b) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдээ веб дээр тохирох хэсэгт гаргах
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);

// var hunController = (function () {
//   var bodol = "Javascript uneheer yadargatai yum.";
//   function tsusGuih() {
//     console.log("zail");
//     return "uh";
//   }
//   function huchilturugchiigAgaaraasAvjTsusruuOruulah() {
//     console.log("sha");
//     return "shine";
//   }
//   return {
//     yarih: function () {
//       bodol = "Javascript bol lag";
//       console.log("Hi!");
//     },
//   };
// })();
