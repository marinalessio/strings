function add(numbers) {
    let numbersArray = getNumbersFromString(numbers);
    let negatives = numbersArray.filter(i => i < 0);
    if (negatives.length > 0)
        throw new Error("Negatives not allowed: " + negatives);

    return numbers ? numbersArray.filter(i => i < 1000).reduce((a, b) => a + b) : 0;
}

function getNumbersFromString(numbers) {
    if (numbers.startsWith("//")) {
        numbers = numbers.substring(2, numbers.length);
        let delimiters = numbers.substring(0, numbers.indexOf("//"));
        let expression = numbers.substring(numbers.indexOf("//") + 2);
        let delimitersSplitted = delimiters.replace("[", "").replace(/]$/, "").split("][");
        let delimitersRegex = createRegexFromDelimiters(delimitersSplitted);
        return expression.split(delimitersRegex).map(Number);
    } else {
        return numbers.split(/,/).map(Number);
    }
}

function createRegexFromDelimiters(delimsArray) {
    return new RegExp(delimsArray.map((delimiter) => {
        return delimiter.replace(/[*.$]/g, "\\$&");
    }).join("|"));
}

module.exports = add;