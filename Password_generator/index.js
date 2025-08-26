// RANDOM PASSWORD GENERATOR

function generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let allowedChars = '';
    let password = '';

    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    if (passwordLength <= 0 || allowedChars.length === 0) {
        return 'Password must be at least 1 character long and include at least one character type.';
    };

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length); // returns a random index between 0 and allowedChars.length - 1
        password += allowedChars[randomIndex];
    };


    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
);

console.log(`Generated Password: ${password}`);