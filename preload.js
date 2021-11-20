document.addEventListener("DOMContentLoaded", function () {
	document.addEventListener("click", function (e) {
		if (e.target.className.startsWith("delete")) return;
		if (!e.target.closest(`div[class*="chat-box-head_"]`)) return;

		let elems = document.querySelectorAll(`#chatRoot div[class*="chat-active_"]`);

		for (var i = 0; i < elems.length; i++) {
			elems[i].querySelector(`div[class*="chat-box-head_"]`).click();
		}
	});
});