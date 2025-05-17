(function(window) {
	var sayText = "Good Bye";
	var sayGoodBye = function (name) {
  		console.log(sayText + " " + name);
	}
	window.sayGoodBye = sayGoodBye;

})(window);