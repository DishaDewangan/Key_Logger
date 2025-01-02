const log=document.querySelector("#log");
const state=document.querySelector("#state");
const startBut=document.querySelector("#start");
const stopBut=document.querySelector("#stop");

startBut.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    log.style.color="white";
    state.style.color="white";
    startBut.disabled=true;
    stopBut.disabled=false;
});

stopBut.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    log.textContent="";
    state.textContent="";
    log.style.color="";
    state.style.color="";
    stopBut.disabled=true;
    startBut.disabled=false;
});

function handleUp(e) {
    state.textContent="Key is up";
    log.innerHTML=`Key <span style="color: green; margin: 0 10px;">${e.key}</span> is pressed up`;
    log.style.backgroundColor="";

}

function handleDown(e) {
    state.textContent="Key is down";
    log.innerHTML=`Key <span style="color: red; margin: 0 10px;">${e.key}</span> is pressed down`;
    log.style.backgroundColor="black";
}