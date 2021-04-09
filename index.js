window.onload = function() {
	const request = new Request('facts/facts.json');
	fetch(request).then(response => response.json()).then(data => {
		const facts = data.facts;
		document.querySelector("input[name='id']").setAttribute("max", facts.length);
		document.querySelector("input[name='id']").addEventListener("change", function() {
			document.getElementsByClassName("id").innerHTML = Number(document.querySelector("input[name='id']").value);
		});
		document.getElementsByClassName("random")[0].addEventListener("click", function() {
			if(facts) {
				location.assign("facts?id=" + Math.floor(Math.random() * facts.length));
			}
		});
	});
};
