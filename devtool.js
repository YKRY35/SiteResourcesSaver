//console.log('Hello from -> Devtool');
chrome.devtools.panels.create(
	"SiteResourcesSaver",
	"icon.gif",
	"content.html",
	function(panel) { 
		console.log("Content is loaded to panel"); 
	}
);