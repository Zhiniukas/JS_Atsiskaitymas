/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const getWeight = document.querySelector("form");
let displayWeight = document.getElementById("output");

const populateHTML = (weight, units) => {

    const elementPlaceholder = document.createElement("div");

    elementPlaceholder.append(`${weight} ${units}`);
    displayWeight.append(elementPlaceholder);
}

const convertWeight = (weight) => {

    const weightLbs = Math.round(weight * 2.2046 * 1000) / 1000;
    const weightGrams = Math.round(weight / 0.001 * 1000) / 1000;
    const weightOz = Math.round(weight * 35.274 * 1000) / 1000;

    displayWeight.replaceChildren();

    populateHTML(weight, "Kilograms");
    populateHTML(weightGrams, "Grams");
    populateHTML(weightLbs, "Pounds");
    populateHTML(weightOz, "Ounces");
}

getWeight.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputWeight = +document.querySelector("#input-weight").value;

    if (inputWeight || inputWeight === 0) { convertWeight(inputWeight); }
    else { alert("ERROR: Not a number"); }
})



