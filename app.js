const shiftAmount = 5;
document.getElementById("shiftCount").textContent = shiftAmount

function caesarCipher(text, shift) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (/[a-zA-Z]/.test(char)) {
            let isUpperCase = char === char.toUpperCase();
            let alphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';

            let index = alphabet.indexOf(char);
            let newIndex = (index + shift) % alphabet.length;

            if (newIndex < 0) {
                newIndex += alphabet.length;
            }

            let newChar = alphabet[newIndex];

            if (isUpperCase) {
                newChar = newChar.toUpperCase();
            }

            result += newChar;
        } else {
            result += char;
        }
    }

    return result;
}

function encryptText() {
    const inputText = document.getElementById("inputText").value;

    if (!isNaN(shiftAmount)) {
        const encryptedText = caesarCipher(inputText, shiftAmount);
        document.getElementById("encryptedText").textContent = "Зашифрованный текст: " + encryptedText;
    } else {
        alert("Введите корректное число для сдвига.");
    }
}

function decryptText() {
    const inputText = document.getElementById("inputTextDecrypt").value;

    if (!isNaN(shiftAmount)) {
        const decryptedText = caesarCipher(inputText, -shiftAmount); // Используем отрицательный сдвиг для дешифрования
        document.getElementById("decryptedText").textContent = "Дешифрованный текст: " + decryptedText;
    } else {
        alert("Введите корректное число для сдвига.");
    }
}