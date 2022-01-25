document.write("1.nilai rata rata (by JavaScript)");
let uts;
uts = 75;
let uas;
uas = 45;
let nilairata = (uts + uas )/2;
const nama = "Aditya";
document.write("<br><br/> nama : " + nama + "</br> nilai uts : " + uts + "</br>nilai UAS" + uas + "</br>nilai rata-rata : " + Math.ceil(nilairata));
if (nilairata >= 75){
  nilairata = "LULUS";
}else if (nilairata >= 50){
  nilairata = "REMIDI";
}else{
  nilairata = "TIDAK LULUS";
}
document.write("</br>selamat anda " + nilairata);

document.write("<br><br>2.array harga");
// let diskon;
// let total = 0;
let harga =[20000, 40000 , 65000 ,80000];
let ttl_diskon = 0;
for(let i = 0; i < harga.length; i++){
  document.write("<br>data barang-" + i + " harga = " + harga[i]);
  if(harga[i] >= 50000){
    diskon = 0.05 * harga[i];
    document.write("<br>diskon 5% = " + diskon);
    ttl_diskon = ttl_diskon + diskon; 
  }
  // total += harga;
  total = total + harga[i];
}
document.write("harga total diskon : " + ttl_diskon +"<br>");
document.write("harga total : " + total + "<br>");
document.write("<br><br>3.OSPEK");
let daftar;
daftar = "sudah"
let bayar;
bayar = 1;
let ospek;
if (daftar == "sudah" && bayar ==1 ){
  ospek = "silahkan mengikuti ospek";
}else if(daftar == "sudah" && bayar ==0){
  ospek = "silahkan bayar terlebih dahulu";
}else{
  ospek = "silahkan hubungi administrasi";
}
  document.write("<br>"+ospek);

