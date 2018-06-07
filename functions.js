/****  A resusable function for createing specific elements and assign needed functionality to it like id, classes or events ****/
function createElement(type, id, classes, text, eventType, event, parent) {
	// create an element with the given type
	const ele = document.createElement(type);

	// assign the element an ID if an ID is present
	if (id != undefined) {
		ele.id = id;
	}

	// assign the element class/classes if a class is present
	if (classes != undefined) {
		ele.className = classes;
	}

	// assign the element an innerHTML if a text is present
	if (text != undefined) {
		ele.innerHTML = text;
	}

	// assign the element an event listener if a event type and event is present
	if (eventType != undefined && event != undefined) {
		ele.addEventListener(eventType, event);
	}

	// append the element to a gived parent if present
	if (parent != undefined) {
		parent.append(ele);
	}

	// else return the created element
	else {
		return ele;
	}
}