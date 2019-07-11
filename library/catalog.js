window.onload = function () {
	"use strict";
	
	//**** This file uses a variable set by a Storyline slide to load the appropriate web object. ****
	//**** The format of the variable is webObjectFolder/fileToLoad (e.g., pdfViewer/references). ****
	
	//VARIABLES
	var player = parent.GetPlayer(),
		getPDFDestination = player.GetVar("PDFDestination"),
		getWebObject = player.GetVar("WebObject"),
		splitWebObject = getWebObject.split("/"), 
		woType = splitWebObject[0],
		woName = splitWebObject[1];
	
	//FUNCTIONS
	function loadPDFDestination (destination) {
		return destination == undefined ? "#page=1" : parseInt(destination) == NaN ? "#" + destination : "#page=" + destination;
	};
	
	function loadWebObject (name) {
		var webObjects =  {
			'pdfViewer': woType + "/web/viewer.html?file=../documents/" + woName + ".pdf" + loadPDFDestination(getPDFDestination),
			'riseEmbed': woType + "/index.html#/lessons/" + woName,
			'default': getWebObject + ".html"
		};
		location.href = "../library/" + (webObjects[name] || webObjects['default']);
	};
	
	//INITIATE
	loadWebObject(woType);
};