import {getBasketApi} from "../api/api";

const ADD_ITEM = "basket/ADD_ITEM";
const DEL_ITEM = "basket/DEL_ITEM";
const SET_BASKET= "BASKET/SET_BASKET";

export interface IGame{
  id_product: number,
  title: string,
  price: number,
  id_order: number,
  id_customer: number
}
export interface BasketState{
  data: IGame[]
}

// interface basketState {
//   items: Map<string, IGame>
// }

const initialState: BasketState = {
  data: []
}

const shopReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // case ADD_ITEM: {
    //   let newItem = {
    //     id: action.id,
    //     src: action.src,
    //     title: action.title,
    //     platform: action.platform,
    //     price: action.price
    //   }
    //   return {
    //     ...state,
    //     items: state.items.set(newItem.id, newItem)
    //   }
    // }
    //
    // case DEL_ITEM: {
    //   state.items.delete(action.id);
    //   return {
    //     ...state
    //   }
    // }
    case SET_BASKET:
      return {
        ...state,
        data: action.data
      }

    default:
      return (state);
  }
}

export const addItemToBasket = (id: number, src: string, title: string, platform: string, price: number) =>
  ({type: ADD_ITEM, id, src, title, platform, price})

export const delItemFromBasket = (id: number) =>
  ({type: DEL_ITEM, id})

export const setBasket = (data: BasketState) => ({type: SET_BASKET, data})

export const getBasket = (id_customer: string) => async (dispatch: (arg0: { type: string; data: BasketState; }) => void) => {
  let response = await getBasketApi(id_customer);
  dispatch(setBasket(response?.data))
}

export default shopReducer;
