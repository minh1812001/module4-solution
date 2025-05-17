(function(window){
    var sayText = "Hello";
    var sayHello = function (name) {
        console.log(sayText + " " + name);
    }
    // Expose the function to the global object
    window.sayHello = sayHello;
})(window);