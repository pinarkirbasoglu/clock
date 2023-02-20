//dijital saat yapımı:
let myClockDOM = document.querySelector('#myClock')
let info = prompt("Adınız nedir ?")
if(info.length>0){
    showTime()
}else{
    myClockDOM.innerHTML ="Lütfen adınızı giriniz"
}
function showTime(){
  const today = new Date(); 
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s)
  let days = ["PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ", "PAZAR"]
  let day = days[today.getDay()]
  myClockDOM.innerHTML =`${h}:${m}:${s} ${day}`
  setTimeout(showTime, 1000)
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }