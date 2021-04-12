window.onload = function() {
	const request = new Request("facts.json");
	fetch(request).then(response => response.json()).then(data => {
		location.assign("../?id=" + Math.floor(Math.random() * data.facts.length));
	});
};
