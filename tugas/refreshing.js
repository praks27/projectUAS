const user = "bigbear";
const pass = 123456;
let pesan;
function cekLogin(username,password){
    if(username == user && password == pass){
        pesan = "login berhasil";
    }else if(username == "" && password == 123456){
        pesan = "maaf username wajib diisi";
    }else{
        pesan ="silahkan cek user dan pass anda";
    }
    return "<h3>soal refreshing</h3>" + "<br>username = " + username + "<br>"
    +"password = " + password + "<br>" + pesan;
}
document.write(cekLogin("",123456));

// function kalkulator
// let nilai1,nilai2,action;
// function kalkulator(nilai1,nilai2,action){
//    action = nilai1 - nilai2;
//     return action;
// }
// document.write(kalkulator(2,3,"-"));
