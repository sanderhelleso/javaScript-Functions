# javaScript Fuctions

<h2>A resusable function for createing specific elements and assign needed functionality to it like id, classes or events</h2>
<p>Really handy when creating elements is a common part of the application, cleans up the main code and gives you more flexibility when it comes to DOM manipulation</p>

```javascript
// basic example on how to use the function
const htmlElement = createElement("h1", "mainHeading", "class1 class2 class3", "I love JS", "click", "myFunction");
document.querySelector("#heading").appendChild(htmlElement);
htmlElement.click();

function createElement(type, id, classes, text, eventType, eventFunction, parent) {
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
		ele.addEventListener(eventType, eval(eventFunction));
	}

	// append the element to a given parent if present
	if (parent != undefined) {
		parent.appendChild(ele);
	}

	// else return the created element
	else {
		return ele;
	}
}
