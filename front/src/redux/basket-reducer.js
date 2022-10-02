
const ADD_ITEM = "basket/ADD_ITEM";
const DEL_ITEM = "basket/DEL_ITEM";

let initialState = {
    items: new Map()
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            let newItem = {
                id: action.id,
                title: action.title,
                platform: action.platform,
                price: action.price,
                photo: action.photo
            }
            return {
                ...state,
                items: state.items.set(newItem.id, newItem)
            }
        }

        case DEL_ITEM: {
            state.items.delete(action.id);
            return {
                ...state
            }
        }

        default:
            return (state);
    }
}

export const addItemToBasket = (title, platform, price, photo, id) =>
    ({type: ADD_ITEM, title, platform, price, photo, id})

export const delItemFromBasket = (id) =>
    ({type: DEL_ITEM, id})


export default shopReducer;