window.onload = () => {
	const displayFact = (fact, index) => {
		document.getElementsByClassName("id")[0].innerHTML = index + 1;
		document.getElementsByClassName("container")[0].innerHTML = fact
			.replaceAll("!", "</span>")
			.replaceAll("*", "<span class='big blue'>")
			.replaceAll("~", "<span class='blue'>")
			.replaceAll("`", "<span class='italic blue'>");
	}; 
	var random = undefined;
	const random = () => {
		random = Math.floor(Math.random() * facts.length);
		displayFact(facts[random], random);
	};
	const urlParams = new URLSearchParams(window.location.search);
	if(urlParams.get("id") === undefined) {
		random();
	}
	const request = new Request("facts.json");
	fetch(request).then(response => response.json()).then(data => {
		const facts = data.facts;
		document.getElementsByClassName("random")[0].addEventListener("click", function() {
			random();
		});
		var fact = facts[id] ? facts[id] : "This fact ~is nonexistent.!";
		displayFact(fact, urlParams.get("id"));
	});
};
