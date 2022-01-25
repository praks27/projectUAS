let namaproduct=[{nama:"monitor"},{nama:"headset"},{nama:"mouse"},{nama:"RAM"},{nama:"ROM"},
{nama:"hardisk"},{nama:"speaker"},{nama:"PS 5"}];
let jenisbarang=document.getElementById("jenis");
namaproduct.forEach((benda) => {
    jenisbarang.innerHTML+="<ul>" +"<li>"+benda.nama+"</li>"+"</ul>";
});

const usernama="bigbear";
const pass=123;
function cek(){
    let username=document.getElementById("user").value;
    let password=document.getElementById("pass").value;
    if(username===""||username===null){
        message("alert","username harus diisi bos!!");
    }else if(password===""||password===null){
        message("alert","password harus diisi bos!!");
    }else{
        if(username==usernama&&password==pass){
            alert("login success welcome back BOSS !!");
            window.location.href="index.html";
        }else{
            document.getElementById("user").value=null;
            document.getElementById("pass").value=null;
            alert("password dan username tidak sama");
        }
    }

}
    
function message(id, text) {
    document.getElementById(id).innerHTML = "<b>" + text + "</b>";
    document.getElementById(id).style.display = "inline";
}
