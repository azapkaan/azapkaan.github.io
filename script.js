var dakikada = document.getElementById("dakikada");
var saatte = document.getElementById("saatte");
var gunde = document.getElementById("gunde");
var hesapla_butonu = document.getElementById("hesapla");
var girdi = document.getElementById("saniye_basina_deger");
var girdigin_sayi = document.getElementById("girdigin_sayi");
var kalan_sayi = document.getElementById("kalan_sayi");
var kalan = document.getElementById("kalan_gun");
var kalan_dakika = document.getElementById("kalan_dakika");
var kalan_saat = document.getElementById("kalan_saat");

var saniye_basina_deger = girdi.value;
var dakikada_toplam_deger = 0;
var saatte_toplam_deger = 0;
var gunde_toplam_deger = 0;

function noktaKurtulma() {
  kalan_gun = kalan_gun.replace(/\./g, "");
  parseInt(kalan_gun);
}

///sayi format
function Sayi_cevirme(num) {
  num = num.toString().replace(/[^0-9.]/g, "");

  let si = [
    { v: 1, s: "DD" },
    { v: 1e3, s: "EE" },
    { v: 1e6, s: "FF" },
    { v: 1e9, s: "GG" },
    { v: 1e12, s: "HH" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
    { v: 1e21, s: "E" },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }
  return (
    (num / si[index].v).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    si[index].s
  );
}
///sayi format

girdi.addEventListener("change", (even) => {
  saniye_basina_deger = even.target.value;
});

kalan_sayi.addEventListener("change", (event) => {
  kalan_gun = event.target.value;
  noktaKurtulma();
  //console.log(kalan_gun);
  console.log(kalan_gun);
});

hesapla_butonu.addEventListener("click", function () {
  dakikada_toplam_deger = saniye_basina_deger * 60;
  saatte_toplam_deger = dakikada_toplam_deger * 60;
  gunde_toplam_deger = saatte_toplam_deger * 24;

  dakikada.innerHTML = `Dakikada: ${Sayi_cevirme(dakikada_toplam_deger)}`;

  saatte.innerHTML = `Saatte: ${Sayi_cevirme(saatte_toplam_deger)}`;

  gunde.innerHTML = `Günde: ${Sayi_cevirme(gunde_toplam_deger)}`;

  girdigin_sayi.innerHTML = Sayi_cevirme(saniye_basina_deger);

  kalan_dakika_degeri = kalan_gun / dakikada_toplam_deger;
  kalan_saat_degeri = kalan_gun / saatte_toplam_deger;
  kalan_gun_degeri = kalan_gun / gunde_toplam_deger;

  kalan_dakika.innerHTML = `Kalan Dakika: ${Math.floor(kalan_dakika_degeri)}`;
  kalan_saat.innerHTML = `Kalan saat: ${Math.floor(kalan_saat_degeri)}`;
  kalan.innerHTML = `Kalan gün: ${Math.floor(kalan_gun_degeri)}`;
});
