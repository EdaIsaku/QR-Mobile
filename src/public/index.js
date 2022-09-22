const inputNr = document.getElementsByClassName("inputNr")[0];
const submitBtn = document.getElementsByClassName("submitBtn")[0];
const qrCode = document.getElementById("qrcode");

let options = {
    text: `${inputNr.value}`,
};

submitBtn.addEventListener("click", () => {
    // qrCode.clearRect(0, 0, canvas.width, canvas.height);

    new QRCode(qrCode, options);
    // inputNr.value = "";
    console.log("clicked");
});
