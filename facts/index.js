window.onload = () => {
	const displayFact = fact => {
		document.getElementsByClassName("container")[0].innerHTML = fact
			.replaceAll("!", "</span>")
			.replaceAll("*", "<span class='big blue'>")
			.replaceAll("~", "<span class='blue'>")
			.replaceAll("`", "<span class='italic blue'>");
	}; 
	const urlParams = new URLSearchParams(window.location.search);
	if(urlParams.get("id") === undefined) {
		location.assign("rand")
	}
	const request = new Request("facts.json");
	fetch(request).then(response => response.json()).then(data => {
		const facts = data.facts;
		document.getElementsByClassName("random")[0].addEventListener("click", function() {
			displayFact(facts[Math.floor(Math.random() * facts.length)]);
		});
		var escapeHTML = document.createElement("div"); //creates new element
		escapeHTML.appendChild(document.createTextNode(urlParams.get("id"))); //createTextNode escapes the string
		const id = escapeHTML.innerHTML
		document.getElementsByClassName("id")[0].innerHTML = Number(id) + 1;
		escapeHTML.remove();
		var fact = facts[id] ? facts[id] : "This fact ~is nonexistent.!";
		displayFact(fact)
	});
};
