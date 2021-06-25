addEventListener("load", function() {
	const displayFact = (fact, index) => {
		document.getElementsByClassName("id")[0].innerHTML = Number(index) + 1;
		document.getElementsByClassName("container")[0].innerHTML = fact
			.replaceAll("!", "</span>")
			.replaceAll(/[*`]/g, "<span class='red'>")
			.replaceAll("~", "<span style='color: var(--orange);'>")
	}; 
	var randomNumber = undefined;
	const request = new Request("facts.json");
	fetch(request).then(response => response.json()).then(data => {
		const facts = data.facts;
		const random = () => {
			randomNumber = Math.floor(Math.random() * facts.length);
			history.replaceState(null, null, new URL(location.origin + location.pathname + "?id=" + randomNumber));
			displayFact(facts[randomNumber], randomNumber);
		};
		const urlParams = new URLSearchParams(location.search);
		if(!urlParams.get("id")) {
			random();
		} else {
			var fact = facts[urlParams.get("id")] ? facts[urlParams.get("id")] : "This fact ~is nonexistent.!";
			displayFact(fact, urlParams.get("id"));
		}
		document.querySelector("button.random").addEventListener("click", function(event) {
			event.stopPropagation();
			random();
		});
		document.querySelector("main").addEventListener("click", function() {
			let element = document.querySelector("div.message");
			element.innerText = "Copied!";
			element.style.color = "var(--orange)";
			element.style.opacity = "1";
			element.style.bottom = "-2em";
			navigator.clipboard.writeText(location.href);
			setTimeout(() => {
				element.innerText = "Copy text";
				element.removeAttribute("style");
			}, 1000);
		});
	});
});
