
const ADD_ITEM = "basket/ADD_ITEM";
const DEL_ITEM = "basket/DEL_ITEM";

export interface IGame{
  id: number,
  src: string,
  title: string,
  platform: string,
  price: number
}

interface basketState {
  items: Map<string, IGame>
}

const initialState: basketState = {
  items: new Map()
}

const shopReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM: {
      let newItem = {
        id: action.id,
        src: action.src,
        title: action.title,
        platform: action.platform,
        price: action.price
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

export const addItemToBasket = (id: number, src: string, title: string, platform: string, price: number) =>
  ({type: ADD_ITEM, id, src, title, platform, price})

export const delItemFromBasket = (id: number) =>
  ({type: DEL_ITEM, id})

export default shopReducer;
