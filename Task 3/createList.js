import { users } from "./script.js";



const populateTable = (robots, tbodyElement) => {
    robots.forEach((robot) => {
        addRow(robot, tbodyElement);
    });
};



const createTable = (list) => {
    const userList = document.getElementById("output");


    const userListElement = createListItem(user.login, user.avatar_url)



    const theadElement = document.createElement("thead");

    const tbodyElement = document.createElement("tbody");

    const idHeader = createElementWithParams("th", { innerText: "ID" });
    const imgHeader = createElementWithParams("th", { innerText: "Image" });
    const firstNameHeader = createElementWithParams("th", {
        innerText: "User",
    });
    const lastNameHeader = createElementWithParams("th", {
        innerText: "Avatar url",
    });
    const cityHeader = createElementWithParams("th", { innerText: "City" });
    const favColorHeader = createElementWithParams("th", {
        innerText: "Favorite color",
    });

    theadElement.append(
        idHeader,
        imgHeader,
        firstNameHeader,
        lastNameHeader,
        cityHeader,
        favColorHeader
    );

    populateTable(robots, tbodyElement);

    tableElement.append(theadElement, tbodyElement);
    document.body.append(tableElement);
};

export { createTable, createElementWithParams, populateTable };
