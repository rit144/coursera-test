
(function (window){
	var greeter1 = {};
	var speakWord = "Hello";
	greeter1.sayHello =function (name) {
	  console.log(speakWord + " " + name);
	}
	window.greeter1 = greeter1;
})(window);