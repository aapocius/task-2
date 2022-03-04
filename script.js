/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
'use strict'
const click = document.getElementById('btn__element');
click.onclick = Counter;
const reset = document.querySelector('[reset]');
reset.onclick = resetCounter;
const clicks = document.getElementById('btn__state');
// clicks.id = document.querySelector('clicks');

var a = 0;

function Counter() {
    a += 1;
    clicks.innerHTML = a;
}

function resetCounter() {
    a = 0;
    clicks.innerHTML = a;
}