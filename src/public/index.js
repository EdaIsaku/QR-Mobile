const inputNr = document.getElementsByClassName("inputNr")[0];
const submitBtn = document.getElementsByClassName("submitBtn")[0];
const clearBtn = document.getElementsByClassName("clearBtn")[0];
const qrCode = document.getElementById("qrcode");

let options = {
    text: `${inputNr.value}`,
};

let generatedQRCode;

//Generate QRCODE and show image
const resetCode = () => {
    generatedQRCode.clear();
};

const generateCode = () => {
    if (generatedQRCode) {
        resetCode();
        generatedQRCode = new QRCode(qrCode, options);
        return;
    }
    generatedQRCode = new QRCode(qrCode, options);
};

submitBtn.addEventListener("click", () => {
    if (inputNr.value == "") {
        return;
    }
    generateCode();
});

inputNr.addEventListener("keyup", () => {
    if (inputNr.value === "") {
        resetCode();
    }
});

clearBtn.addEventListener("click", () => {
    resetCode();
});
