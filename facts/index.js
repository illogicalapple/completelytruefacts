window.onload = () => {
	const displayFact = (fact, index) => {
		document.getElementsByClassName("id")[0].innerHTML = index + 1;
		document.getElementsByClassName("container")[0].innerHTML = fact
			.replaceAll("!", "</span>")
			.replaceAll("*", "<span class='big blue'>")
			.replaceAll("~", "<span class='blue'>")
			.replaceAll("`", "<span class='italic blue'>");
	}; 
	var randomNumber = undefined;
	const request = new Request("facts.json");
	fetch(request).then(response => response.json().facts).then(facts => {
		const random = () => {
			randomNumber = Math.floor(Math.random() * facts.length);
			displayFact(facts[randomNumber], randomNumber);
		};
		const urlParams = new URLSearchParams(window.location.search);
		if(!urlParams.get("id")) {
			random();
		} else {
			var fact = facts[urlParams.get("id")] ? facts[urlParams.get("id")] : "This fact ~is nonexistent.!";
			displayFact(fact, urlParams.get("id"));
		}
		document.getElementsByClassName("random")[0].addEventListener("click", function() {
			random();
		});
	});
};
