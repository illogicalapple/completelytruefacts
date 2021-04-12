window.onload = () => {
	document.getElementsByClassName("random")[0].addEventListener("click", function() {
		if(facts) {
			location.assign("facts/rand");
		}
	});
};
