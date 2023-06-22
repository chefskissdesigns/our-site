function getCopyYearElement() {
    const copyYearElement = document.getElementById('copy-year');
    return copyYearElement;
}

function setCopyYearElement(element, yearString) {
    element.innerText = yearString;
}

function getCurrentYear() {
    const curYear = new Date().getFullYear().toString();
    return curYear;
}

function main() {
    setCopyYearElement(getCopyYearElement(), getCurrentYear());
}

main();