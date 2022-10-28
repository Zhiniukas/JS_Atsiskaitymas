
//<div id="output"></div>

const createElementWithParams = (tagName, params) => {
    const element = document.createElement(tagName);

    Object.assign(element, params);

    return element;
};

const populateList = (members) => {
    const createMembersList = document.querySelector("#output");
    const elementList = document.createElement("div");
    elementList.className = "userList";

    members.forEach(member => {
        const login = member.login;
        const rowElement = document.createElement("div");
        rowElement.className = "record";
        const loginData = createElementWithParams("div", { textContent: login });
        const imgdata = createElementWithParams("div");
        const img = document.createElement("img");

        img.src = member.avatar_url;
        imgdata.append(img);
        loginData.className = "loginPlaceholder";
        rowElement.append(loginData, imgdata);

        elementList.append(rowElement);
    });

    createMembersList.replaceChildren();
    createMembersList.append(elementList);
}

export { populateList }