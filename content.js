start_selector = document.querySelector("select#start_time-timezone");
end_selector = document.querySelector("select#end_time-timezone");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	let selector = end_selector;
	if (message.name === "btn-start-tz") {
		selector = start_selector;
	}
    selector.value = message.tz;
    return true
});
