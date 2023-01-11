import axios from "axios"

const instance = axios.create({
  baseURL: `http://localhost:5000/api/Store/`,
});

export const getGamesApi = () => {
  try{
    return instance.get(`SelectProductList`)
  }
  catch (err) {
    console.log(err)
  }
}

export const addGameToOrder = async (id_product: string, id_customer: string, product_number: string) => {
  try {
     return await instance.post(`Insert2`, {TableNames: "store_order", id_product, id_customer, product_number})
  }
  catch (err) {
    console.log(err)
  }
}

export const getBasketApi = (id_customer: string) => {
  try{
    return instance.get(`SelectOrder`, {params:{idCustomer: id_customer}})
  }
  catch (err) {
    console.log(err)
  }
}

export const delElFromBasket = async (id_order: string) => {
  try{
    return await instance.delete(`Delete`, {data: {TableNames: "store_order", Id: id_order}})
  }
  catch (err) {
    console.log(err)
  }
}
