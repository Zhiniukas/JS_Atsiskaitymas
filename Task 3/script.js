/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
import { populateList } from "./createList.js";

const ENDPOINT = 'https://api.github.com/users';
const onClick = document.body.querySelector("#btn");

async function getUsers(api) {
    try {
        const response = await fetch(api);

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (err) {
        console.log(err);
    }
}



const users = await getUsers(ENDPOINT);
console.log(users)
onClick.addEventListener("click", (event) => {
    populateList(users);
})
