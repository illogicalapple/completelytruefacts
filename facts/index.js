var log = [
	"%cHello! My name %cis illogicalapple.\n%cI hope you're enjoying this!\nGot an idea for a fact? You %ccan add it by following the instructions at https://github.com/illogicalapple/completely-true-facts/wiki/Adding-Facts.",
	"font-family: Roboto, sans-serif; font-size: 15px;", //styling
	"font-family: Roboto, sans-serif; color: #4287f5; font-size: 15px;",
	"font-family: Roboto, sans-serif; font-size: 15px;",
	"font-family: Roboto, sans-serif; color: #4287f5; font-size: 15px;"
];
console.log(...log);
window.onload = () => {
	const displayFact = (fact, index) => {
		document.getElementsByClassName("id")[0].innerHTML = Number(index) + 1;
		document.getElementsByClassName("container")[0].innerHTML = fact
			.replaceAll("!", "</span>")
			.replaceAll("*", "<span class='big blue'>")
			.replaceAll("~", "<span class='blue'>")
			.replaceAll("`", "<span class='italic blue'>");
	}; 
	var randomNumber = undefined;
	const request = new Request("facts.json");
	fetch(request).then(response => response.json()).then(data => {
		const facts = data.facts;
		const random = () => {
			randomNumber = Math.floor(Math.random() * facts.length);
			window.history.replaceState(null, null, new URL(window.location.origin + window.location.pathname + "?id=" + randomNumber));
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
