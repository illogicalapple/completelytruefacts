window.onload = function() {
	const request = new Request("facts.json");
	fetch(request).then(response => response.json()).then(data => {
		const facts = data.facts;
		const urlParams = new URLSearchParams(window.location.search);
		var escapeHTML = document.createElement("div"); //creates new element
		escapeHTML.appendChild(document.createTextNode(urlParams.get("id"))); //createTextNode escapes the string
		const id = escapeHTML.innerHTML
		document.getElementsByClassName("id")[0].innerHTML = Number(id) + 1;
		escapeHTML.remove();
		const fact;
		if(facts[id]) {
			fact = facts[id];
		} else {
			fact = "This fact ~is nonexistent.!";
		}
		document.getElementsByClassName("container")[0].innerHTML = fact
			.replaceAll("!", "</span>")
			.replaceAll("*", "<span class='big blue'>")
			.replaceAll("~", "<span class='blue'>")
			.replaceAll("`", "<span class='bold blue'>");
		document.getElementsByClassName("random")[0].addEventListener("click", function() {
			location.assign(window.location.toString().split("?")[0] + "?id=" + Math.floor(Math.random() * facts.length));
		});
	});
};
