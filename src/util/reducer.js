export const initialState = {
  user: null,
  products: [],
  finalResult: 0,
}

export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_DATA_OBAT: 'SET_DATA_OBAT',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      }
    case 'ADD_ITEM':
      return {
        ...state,
        products: [...state.products, action],
      }
    case 'DELETE_ITEM':
      const newProduk = state.products.filter((item) => {
        return item.products.id !== action.products
      })
      return {
        ...state,
        products: newProduk,
      }
    case 'MINUS_ITEM':
      const editProduk = state.products.find((item) => {
        return item.products.id === action.products
      })
      console.log(editProduk, action.products, state.products[0].products.id)

      return {
        ...state,
        products: [
          ...state.products,
          { ...editProduk, total: editProduk.total - 1 },
        ],
      }

    case 'PLUS_ITEM':
      return {
        ...state,
        products: action,
      }
    case 'RESET_ITEM':
      return {
        ...state,
        products: action.products,
      }
    case 'ADD_PRICE':
      return {
        ...state,
        finalResult: action,
      }
    default:
      return state
  }
}

export default reducer
