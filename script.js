const passwordLengthElement = document.getElementById("passwordLength");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSpecialCharsElement = document.getElementById(
  "includeSpecialChars"
);
const generatePasswordButton = document.getElementById(
  "generatePasswordButton"
);
const generatedPasswordElement = document.getElementById("generatedPassword");

// Fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
  const passwordLength = passwordLengthElement.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSpecialChars = includeSpecialCharsElement.checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_+=<>?/{}[]";

  let availableChars = lowercaseChars;
  let generatedPassword = "";

  if (includeUppercase) {
    availableChars += uppercaseChars;
  }

  if (includeNumbers) {
    availableChars += numberChars;
  }

  if (includeSpecialChars) {
    availableChars += specialChars;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars.charAt(randomIndex);
  }

  generatedPasswordElement.textContent = generatedPassword;
}

generatePasswordButton.addEventListener("click", generateRandomPassword);
