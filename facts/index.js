window.onload = function() {
	const urlParams = new URLSearchParams(window.location.search);
	if(urlParams.get("id") === undefined) {
		location.assign("rand")
	}
	const request = new Request("facts.json");
	fetch(request).then(response => response.json()).then(data => {
		const facts = data.facts;
		var escapeHTML = document.createElement("div"); //creates new element
		escapeHTML.appendChild(document.createTextNode(urlParams.get("id"))); //createTextNode escapes the string
		const id = escapeHTML.innerHTML
		document.getElementsByClassName("id")[0].innerHTML = Number(id) + 1;
		escapeHTML.remove();
		var fact = facts[id] ? facts[id] : "This fact ~is nonexistent.! Redirecting to existing fact in *3 seconds.!";
		if(!facts[id]) {
			setTimeout(() => {
				location.assign("rand");
			}, 3000);
		}
		document.getElementsByClassName("container")[0].innerHTML = fact
			.replaceAll("!", "</span>")
			.replaceAll("*", "<span class='big blue'>")
			.replaceAll("~", "<span class='blue'>")
			.replaceAll("`", "<span class='italic blue'>");
		document.getElementsByClassName("random")[0].addEventListener("click", function() {
			location.assign("rand");
		});
	});
};
