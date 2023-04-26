function add7 (num) {
    return num + 7;
}

console.log(add7(3));

function multiply (a, b) {
    return a * b;
}

console.log(multiply(4, 5))

function capitalize (text) {
    // convert to lowercase
    let textNoCaps = text.toLowerCase()
    // replace the first letter with caps version --- would it be better form to turn the replacement letter into its own variable?
    let sentenceCase = textNoCaps.replace(textNoCaps[0], textNoCaps[0].toUpperCase());
    return sentenceCase;
}

let testString = "wRiTE tHESe iN THe ScRiPt TAg OF A skelEToN hTmL FILe"

console.log(capitalize(testString));

function lastLetter (text) {
    return text.slice(-1);
}

console.log(lastLetter(testString));