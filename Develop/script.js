let UpperCase =
    ['A',
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
    ['0',
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
    ['@',
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