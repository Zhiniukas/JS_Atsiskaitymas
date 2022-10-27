/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let clicks = 0;
const onClick = document.body.querySelector("#btn__element");

onClick.addEventListener("click", (event) => {
  const displayClicks = document.getElementById("btn__state");

  clicks++;
  displayClicks.replaceChildren(clicks);
});
