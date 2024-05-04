var interval;
var msec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var getMsec = document.getElementById('ms')
var getSec = document.getElementById('s')
var getMin = document.getElementById('m')
var getHour = document.getElementById('h')
var stop = false;

function start(){
    interval = setInterval(()=>{
        msec++;
        getMsec.innerHTML = ("00" + msec).slice(-3);
        if(msec>=100){
            sec++;
            getSec.innerHTML = ("0" + sec).slice(-2);
            msec=0;
        }
        if(sec >= 60){
            min++
            getMin.innerHTML = ("0" + min).slice(-2);
            sec=0
        }
        if(min >= 60 ){
            hour++
            getHour.innerHTML = ("0" + hour).slice(-2);
            min=0
        }
    },10)
    stop = true;
    if(stop==true){
        document.getElementById('b-s').style.display = 'none'
        document.getElementById('b-p').style.display = 'inline'
        stop = false
    }
}


function pause(){
    clearInterval(interval);
    if(stop==false){
        document.getElementById('b-p').style.display = 'none'
        document.getElementById('b-s').style.display = 'inline'
        stop = true 
    }
}

function reset(){
    clearInterval(interval);
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    getMsec.innerHTML = "000";
    getSec.innerHTML = "00";
    getMin.innerHTML = "00";
    getHour.innerHTML = "00";
    if(stop==false){
        document.getElementById('b-p').style.display = 'none'
        document.getElementById('b-s').style.display = 'inline'
        stop = true 
    }
}