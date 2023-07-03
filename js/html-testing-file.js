/*
Age calculator
*/

// main:
function main() {
	const maxDateAge = 18;
	const minDateAge = 120;
	const todaysDate = new Date();
	const bdayInputElem = document.querySelector('#birth-date');
	const displayElem = document.querySelector('#displayElement');
	const element = document.getElementById('conversion')
	const dateMin = calcMinDateWithYearToString(todaysDate, minDateAge)
	const dateMax = calcMaxDateWithYearToString(todaysDate, maxDateAge)

	element.addEventListener('click', function () { onLoadGetsInput(displayElem, bdayInputElem, dateMax, dateMin); });
	minAttrSetDateInput(bdayInputElem, dateMin);
	maxAttrSetDateInput(bdayInputElem, dateMax);
}

main();

// after main, add eventListener:

// onLoadGetsInput runs after <script> is read:
function onLoadGetsInput(displayElem, bdayInputElem, dateMax, dateMin) {
	displayToHTML(displayElem, bdayInputElem, calculateAge(getBirthDate()), dateMax, dateMin);
}

// calculate max (youngest) date value and return as LocaleDate string:
function calcMaxDateWithYearToString(date, years) {
	let newDate = new Date(date);
	newDate.setYear(newDate.getFullYear() - years);
	return newDate.toJSON().split('T')[0];
}

// calculate min (oldest) date value and return as LocaleDate string:
function calcMinDateWithYearToString(date, years) {
	let newDate = new Date(date);
	newDate.setYear(newDate.getFullYear() - years);
	return newDate.toJSON().split('T')[0];
}

// minimum date setting for date input field:
function minAttrSetDateInput(element, dateObj) {
	element.setAttribute('min', dateObj);
}

// maximum date setting for date input field:
function maxAttrSetDateInput(element, dateObj) {
	element.setAttribute('max', dateObj);
}

// get date from input as num:
function getBirthDate() {
	const inputElemVal = document.querySelector('#birth-date').value;
	inputElemValDate = new Date(inputElemVal);
	return inputElemValDate;
}

//calculate age from inputElemValDate:
function calculateAge(inputElemValDate) {
	let age = Math.floor((Date.now() - inputElemValDate)/31557600000); //31557600000ms = 1 year
	return age;
}

// display result age to HTML:
function displayToHTML(displayElement, inputElement, age, dateMax, dateMin) {
	if (isNaN(age) || age < 18 || age > 120 || inputElement.value > dateMax || inputElement.value < dateMin) {
		inputElement.style.border = "0.5rem solid rgba(255, 0, 12, 0.25)";
		displayElement.innerText = "Please provide a Valid Date!";
	} else {
		inputElement.style.border = "0.5rem solid rgba(0, 139, 4, 0.25)";
		displayElement.innerText = `Your age is ${age} years.`;
	}
}

/*
Scrollable privacy notice modal
*/

const showPrivacyBtn = document.querySelector('#show-privacy-button');
const blackdrop = document.querySelector('#blackdrop');
const privacyModal = document.querySelector('#privacy-modal');
const closeBtn = document.querySelector('#close');
showPrivacyBtn.addEventListener('click', openPrivacyModal);

function openPrivacyModal() {
	blackdrop.style.display = 'block';
	blackdrop.style.zIndex = 2;
	privacyModal.style.zIndex = 3;
	closeBtn.style.zIndex = 4;
	
	closeBtn.addEventListener('click', closePrivacyModal);
}

function closePrivacyModal() {
	blackdrop.style.display = 'none';
}


