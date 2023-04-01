const girdi = document.getElementById("girdi");
const sonucyazisi = document.getElementById("SonucYazisi");

girdi.addEventListener("change", () => {
  const girdiDegeri = girdi.value;

  if (girdiDegeri == "Aylin" || girdiDegeri == "aylin") {
    sonucyazisi.innerHTML = `IQ Puanın: 0 SALAKSIN Aylin`;
  } else {
    const randomsayi = Math.floor(Math.random() * (100 - 90)) + 90;
    sonucyazisi.innerHTML = `IQ Puanın: ${randomsayi} SÜPER ZEKASIN ${girdiDegeri}`;
  }
});
