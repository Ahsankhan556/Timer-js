const openBars = document.getElementById("bar");
const sideBars = document.getElementById("secndbar");

function openBar() {
    if (sideBars.style.display === "block") {
        sideBars.style.display = "none";
    } else {
        sideBars.style.display = "block";
    }
}




// alert("hhsj");
let mili = 0;
let sec = 0;
let mint = 0;
let hr = 0;

let timer = false;
function start(){
    timer = true;
myfun();
}
function stop(){
timer= false;
}
function reset(){
    window.location.reload();
}
function myfun(){
    if(timer == true){
mili = mili +1
    }
    if(mili == 100){
        sec= sec +1
        mili = 0;
    }
    if(sec == 60){
        mint= mint +1
        sec = 0;
    }
    if(mint== 60){
        hr=hr +1
        mint =0;
    }
    
    setTimeout("myfun()",10)
    document.getElementById("mili").innerHTML=mili;
    document.getElementById("sec").innerHTML=sec;
    document.getElementById("mint").innerHTML=mint;
    document.getElementById("hr").innerHTML=hr;
    
}