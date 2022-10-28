
const insertCarCard = (carCard) => {
    const addCard = document.createElement("div");
    const cardBrand = document.createElement("div");
    const carModels = populateModelsList(carCard.models);

    addCard.className = "carCard";
    carModels.className = "carModelsList";

    cardBrand.append(carCard.brand);
    addCard.append(cardBrand, carModels);
    return addCard
}

const populateModelsList = (models) => {
    const divider = document.createElement("div");
    const result = document.createElement("div");

    models.forEach(model => {
        const divider = document.createElement("div");

        divider.className = "model";

        divider.append(model);
        result.append(divider);
    });

    return result;
};

const populateCardList = (cars) => {
    const cardList = document.querySelector("#output");
    const populatedCards = document.createElement("div");

    cars.forEach(car => {
        populatedCards.append(insertCarCard(car));
    });

    cardList.append(populatedCards);
}

export { populateCardList };
