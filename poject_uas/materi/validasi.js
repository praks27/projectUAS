function openpage(page) {
    document.getElementById("register").innerHTML = '<object type="text/html" data="' + page + '"  width="1000" height="1000"></object>';
  }
  
// nama
// txtuser
// password
// txtpass
// tlp
let date=new Date();
let tahun=date.getFullYear();
let bulan=date.getMonth()+1;
document.getElementById("btndaftar").disabled=true;
// nama
document.getElementById("nama").onkeyup=function(){
    let name=document.getElementById("nama");
    name.value=name.value.toUpperCase();
}
document.getElementById("txtpass").onchange=function(){
    let pass=document.getElementById("txtPass").value;
    let pass2=document.getElementById("txtpass").value;
    if(pass2==pass){
        document.getElementById("btndaftar").disabled=false;
    }else if(pass2!=pass){
        alert("password yang anda inputkan tidak sesuai");
        document.getElementById("btndaftar").disabled=true;
    }
}
   
document.getElementById("btndaftar").onclick=function(){
   document.getElementById("dftr").style.display="none";
let nama=document.getElementById("nama").value;
let user=document.getElementById("txtuser").value;
let pass=document.getElementById("txtPass").value;
let pass2=document.getElementById("txtpass").value;
let telp=document.getElementById("tlp").value;
let kode=nama.substring(0,2);
if(nama===""||user===""||pass===""||pass2===""||telp===""){
    alert("semua form harus diisi!");
}else{

let tampil='<div class="text-center">'+'<h5>Terimakasih telah melakukan pendaftaran menjadi member</h5>'+'</div>'+
"<p>"+"Nama          :   "+nama+"</p>";
tampil+="<p>"+"Username         :   "+user+"</p>";
tampil+="<p>"+"Nomor telepon    :   "+telp+"</p>";
tampil+="<p>"+"Kode Member  :   "+bulan+tahun+kode+"</p>";
tampil+='<p class="text-center">'+"Silahkan cek email untuk mendapat link aktivasi"+'</p>';

document.getElementById("register").innerHTML=tampil;
    }
}


