chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			document.body.classList.remove('lyon_mode')
			document.body.classList.remove('tisa_mode')
			document.body.classList.remove('helvetica_mode')
			document.body.classList.remove('georgia_mode')
			document.body.classList.add('custom_mode')
			
			var themePicker = document.querySelector('.read_option_color ul');
			
			const newThemeSwatch = document.createElement("li");
			newThemeSwatch.className = "js_swatch swatch swatch_green";
			newThemeSwatch.setAttribute("data-color-mode", "greenmode");
			newThemeSwatch.appendChild(document.createElement('div'))
			
			themePicker.append(newThemeSwatch);

		}
	}, 10);
});