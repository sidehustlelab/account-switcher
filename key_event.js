if (window == top) {
	window.addEventListener('keyup', doKeyPress, false);
}

var acc_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function doKeyPress(e) {
	var n = parseInt(e.keyCode) - 48;
	if (((e.shiftKey && e.altKey) || e.altKey) && acc_num.includes(n)) {
		if (e.shiftKey) {
			command = 'shift' + n.toString(10);
			chrome.runtime.sendMessage(command);
		} else {
			command = 'alt' + n.toString(10);
			chrome.runtime.sendMessage(command);
		}
	}
}
