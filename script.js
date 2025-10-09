let qrImage = document.getElementById("qrImage");
let url = document.getElementById("url");

function generateQR() {
  if (url.value.trim().length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      url.value;
  } else {
    url.classList.add("error");
    setTimeout(() => {
      url.classList.remove("error");
    }, 1000);
  }
}
