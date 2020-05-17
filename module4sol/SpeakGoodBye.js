(function (window){
	var greeter = {};
	var speakWord = "Good Bye";
	greeter.sayBye =function (name) {
	  console.log(speakWord + " " + name);
	}
	window.greeter = greeter;
})(window);