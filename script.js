var dakikada = document.getElementById("dakikada");
var saatte = document.getElementById("saatte");
var gunde = document.getElementById("gunde");
var hesapla_butonu = document.getElementById("hesapla");
var girdi = document.getElementById("saniye_basina_deger");
var girdigin_sayi = document.getElementById("girdigin_sayi");
var kalan_sayi = document.getElementById("kalan_sayi");
var kalan = document.getElementById("kalan");

saniye_basina_deger = girdi.value;
var dakikada_toplam_deger = 0;
var saatte_toplam_deger = 0;
var gunde_toplam_deger = 0;
var kalan_gun = kalan_sayi.value;

girdi.addEventListener("change", (even) => {
  saniye_basina_deger = even.target.value;
});

kalan_sayi.addEventListener("change", (event) => {
  kalan_gun = event.target.value;
});

hesapla_butonu.addEventListener("click", function () {
  dakikada_toplam_deger = saniye_basina_deger * 60;
  saatte_toplam_deger = dakikada_toplam_deger * 60;
  gunde_toplam_deger = saatte_toplam_deger * 24;

  dakikada.innerHTML =
    `Dakikada: ${dakikada_toplam_deger.toLocaleString(
      "en-us",
      parseInt(dakikada_toplam_deger)
    )}` + "f";

  saatte.innerHTML = `Saatte: ${saatte_toplam_deger.toLocaleString(
    "en-US",
    parseInt(saatte_toplam_deger)
  )}`;

  gunde.innerHTML = `Günde: ${gunde_toplam_deger.toLocaleString(
    "en-us",
    parseInt(gunde_toplam_deger)
  )}`;

  girdigin_sayi.innerHTML = saniye_basina_deger + "f";
  kalan_gun_degeri = kalan_gun / gunde_toplam_deger;
  kalan.innerHTML = `Kalan gün: ${parseInt(kalan_gun_degeri)}`;
});
