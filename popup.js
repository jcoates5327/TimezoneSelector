buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
	let btn = buttons[i];
	
	btn.addEventListener("click", function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			let msg = {
				name: btn.getAttribute("name"),
				tz: btn.getAttribute("tz")
			}
			chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {});  
		});
	});
}