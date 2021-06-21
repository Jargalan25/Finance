// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value,
      };
    },

    getDOMStrings: function () {
      return DOMStrings;
    },
  };
})();
// Санхүүтэй ажиллах контроллер
var financeController = (function () {
  //private data
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
  return {
    addItem: function (type, desc, val) {
      var item, id;

      // id- identification

      if (data.item[type].lenght === 0) id = 1;
      else {
        id = data.allItems[type][data.allItems[type].lenght - 1].id + 1;
      }
      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        // type === exp
        item = new Expense(id, desc, val);
      }
      data.allItems[type].push(item);
    },
  };
})();
// Программын холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна
    var input = uiController.getInput();
    financeController.addItem(input.type, input.description, input.value);
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдээ веб дээр тохирох хэсэгт гаргах
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана
  };
  // Холбосон эвент листенрүүд
  var setupEventListeners = function () {
    var DOM = uiController.getDOMStrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      console.log("Application started...");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
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
