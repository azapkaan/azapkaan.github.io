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

///sayi format
function Sayi_cevirme(num) {
  num = num.toString().replace(/[^0-9.]/g, "");

  let si = [
    { v: 1, s: "FF" },
    { v: 1e3, s: "GG" },
    { v: 1e6, s: "HH" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
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
});

hesapla_butonu.addEventListener("click", function () {
  dakikada_toplam_deger = saniye_basina_deger * 60;
  saatte_toplam_deger = dakikada_toplam_deger * 60;
  gunde_toplam_deger = saatte_toplam_deger * 24;

  dakikada.innerHTML = `Dakikada: ${Sayi_cevirme(dakikada_toplam_deger)}`;

  saatte.innerHTML = `Saatte: ${Sayi_cevirme(saatte_toplam_deger)}`;

  gunde.innerHTML = `Günde: ${Sayi_cevirme(gunde_toplam_deger)}`;

  girdigin_sayi.innerHTML = Sayi_cevirme(saniye_basina_deger);
  kalan_gun_degeri = kalan_gun / gunde_toplam_deger;
  kalan.innerHTML = `Kalan gün: ${parseInt(kalan_gun_degeri)}`;
});
