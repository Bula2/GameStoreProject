export const basketItemsSelector = (state) => {
    let basketItems = [];
    state.basketPage.items.forEach((item) => {
        basketItems.push({
            "id": item.id, "title": item.title,
            "platform": item.platform, "price": item.price, "photo": item.photo
        });
    });
    return basketItems;
}