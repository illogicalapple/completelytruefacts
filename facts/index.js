window.onload = function() {
	const request = new Request("facts.json");
	fetch(request).then(response => response.json()).then(data => {
		const facts = data.facts;
		const urlParams = new URLSearchParams(window.location.search);
		var escapeHTML = document.createElement("div"); //creates new element
		escapeHTML.appendChild(document.createTextNode(urlParams.get("id"))); //createTextNode escapes the string
		const id = escapeHTML.innerHTML
		document.getElementsByClassName("id")[0].innerHTML = id;
		escapeHTML.remove();
		document.getElementsByClassName("container")[0].innerHTML = document.getElementsByClassName("container")[0].innerHTML + facts[id]
			.replaceAll("!", "</span>")
			.replaceAll("*", "<span class='big blue'>")
			.replaceAll("~", "<span class='blue'>")
			.replaceAll("`", "<span class='bold blue'>");
		document.getElementsByClassName("random")[0].addEventListener("click", function() {
			location.assign(window.location.split("?")[0] + "?id=" + Math.floor(Math.random() * facts.length));
		});
	});
};
