// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var fs = require('fs');
var path = require('path');
var webview = document.getElementById('main');

let css = false;

webview.addEventListener('dom-ready', function () {
	let tmnt = setInterval(function() {
		webview.insertCSS(css);
		clearInterval(tmnt);
	}, 100);
});

fs.readFile(path.join(__dirname, "inject.css"), 'utf-8', (err, data) => {
	if(err){
	    alert("An error ocurred reading the file :" + err.message);
	    return;
	}

	css = data;
});