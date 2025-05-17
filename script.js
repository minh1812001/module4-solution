(function () {

var names = ["Yaakov", "John", "Jen", "Dung", "Tu", "Thai", "Hiep", "Ling", "Thong", "Minh"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 't') {
    sayGoodBye(names[i]);
  }
  else {
    sayHello(names[i]);
  }
}

})();