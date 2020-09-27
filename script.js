const testWrapper = document.querySelector(".fake .test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const submitbtn= document.querySelector("#submit");
var Timer=[0,0,0,0];
console.log(theTimer.innerHTML);
var isTextEnterd=false;
var TimerRunning=false;
var myinter;
// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:


// Start the timer:


// Reset everything:


// Event listeners for keyboard input and the reset button:
function read(){
Text=originText.value;
isTextEnterd=true;
}
function readtextarea(){
  console.log(Text,isTextEnterd);
  if(!isTextEnterd){
  alert("لطفا متنی برای تست ثبت نمایی");
  stop();
  theTimer.innerHTML="00:00:00";
  testArea.value="";
}
else{
  var sub= Text.substring(0,testArea.value.length);
      if(testArea.value===Text){
        testWrapper.style.borderColor="green";
        stop();
        alert("آفرین");
      }
      else {
      if(testArea.value === sub)
          testWrapper.style.borderColor="blue";
      else
        testWrapper.style.borderColor="red";
      }
}
}

function timeStart(){
  if(testArea.value===""){
    testWrapper.style.borderColor="gray";

  }
if(testArea.value.length==0 && !TimerRunning)
myinter =  setInterval( timer, 10);
TimerRunning=true;
}

function timer(){
  Timer[0]=Timer[0]+1;
  if(Timer[0]>99){
    Timer[1]++;
    Timer[0]=0;
  }
  if(Timer[1]>59){
  Timer[2]++;
  Timer[1]=0;
}
  theTimer.innerHTML=addZero(Timer[2])+":"+addZero(Timer[1])+":"+addZero(Timer[0]);
}
function addZero(value){
  if (value<10)
  return "0"+value;
  return value;
}
function stop(){
  clearInterval(myinter);
  Timer=[0,0,0,0];
  theTimer.innerHTML="00:00:00";
  testArea.value="";
  TimerRunning=false;
}
submitbtn.addEventListener("click",read,false);
testArea.addEventListener("keyup",readtextarea,false);
testArea.addEventListener("keypress",timeStart,false);
resetButton.addEventListener("click",stop,false);
