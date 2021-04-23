window.onload = (() => document.querySelector("button.submit").addEventListener("click", () => {
	if(document.querySelector("input[name='fact']").value) {
		fetch("https://formspree.io/f/xqkwayld", {
			method: "POST",
			redirect: "manual",
			body: JSON.stringify({
				Fact: document.querySelector("input[name='fact']").value
			})
		}).then(() => location.assign("success"))
	} else {
		document.querySelector("input[name='fact']").focus();
	}
}));
