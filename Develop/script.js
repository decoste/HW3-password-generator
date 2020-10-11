let UpperCase =
    [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'Y',
        'Z'
    ];

let numbers =
    [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
    ];

let specialCharacters =
    [
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '.',
        '~',
        '(',
        ')',
        '[',
        ']',
        '{',
        '}',
        '\\',
        'm',
        ':',
        ';',
        '+',
        '-',
        '_',
        '/'
    ];

let lowerCase = [];
for (i = 0; i < UpperCase.length; i++) {
    lowerCase.push(UpperCase[i].toLowerCase());
}
console.log(lowerCase);

function getPassOptions() {
    let length = parseInt(prompt('How many characters would you like your password to contain?Your password should be between 8 to 128 charecters'));
    if (isNaN(length) === true) {
        alert("Please enter a number.");
        return;
    }
    if (length < 8 || length > 128) {
        alert('Password length must be between 8 and 128 characters');
        return;
    }

    let includeSpecialChar = confirm('Click OK to confirm including special characters.');
    let includeNumeric = confirm('Click OK to confirm including numeric characters.');
    let includeLowerCase = confirm('Click OK to confirm including lowercase characters.');
    let includeUpperCase = confirm('Click OK to confirm including uppercase characters.');

    if (includeSpecialChar === false
        && includeNumeric === false
        && includeLowerCase === false
        && includeUpperCase === false) {
        alert('The user must select at least one character type.')
    }

    var PassOptions = {
        length: length,
        includeSpecialChar: includeSpecialChar,
        includeNumeric: includeNumeric,
        includeLowerCase: includeLowerCase,
        includeUpperCase: includeUpperCase,
    };

    return PassOptions;
}

function randomPass(arr) {

    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}

function createPassword() {
    var options = getPassOptions();
    var result = [];
    var possibleCharacters = [];
    var passwordOption = [];

    if (options.includeSpecialChar) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        passwordOption.push(randomPass(specialCharacters));
    }

    if (options.includeNumeric) {
        possibleCharacters = possibleCharacters.concat(numbers);
        passwordOption.push(randomPass(numbers));
    }

    if (options.includeLowerCase) {
        possibleCharacters = possibleCharacters.concat(lowerCase);
        passwordOption.push(randomPass(lowerCase));
    }

    if (options.includeUpperCase) {
        possibleCharacters = possibleCharacters.concat(UpperCase);
        passwordOption.push(randomPass(UpperCase));
    }

    for (let i = 0; i < options.length; i++) {
        let possibleCharacter = randomPass(possibleCharacters);
        result.push(possibleCharacter);
    }

    for (let i = 0; i < password.length; i++) {
        result[i] = passwordOption[i];
    }

    return result.join('');
}

function writePassword() {
    let password = createPassword();
    let passwordText = document.querySelector('#password')
    passwordText.value = password;
}


let onClick = document.querySelector("#generate").addEventListener('click', writePassword);
