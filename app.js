var min=00;
var sec=00;
var msec=00;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;
var check=true
var dataList=[]
function timer(){
    msec ++
    msecHeading.innerHTML= msec ;
    if(msec>=100){
        sec++;
    secHeading.innerHTML=sec;    
        msec=00
    }else if(sec>=60){
        min++
        minHeading.innerHTML=min;
        sec=00
    }
}
function start(){
interval=setInterval(timer,10)
check=false;

}
function stop(){
    clearInterval(interval)
    check=true
}
function reset(){
    min="00";
    sec="00";
    msec="00";
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
    clearInterval(interval);
    check=true;

}
function checkOut(){
    if (check==true){
        start();
    }else{
        return
    }
}

