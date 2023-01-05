export const initialState= {
    cart : [],
    user: null
} 

export const reducer = (state,action) => {
    switch (action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case "REMOVE_USER":
            return{
                ...state,
                user: null
            }
        case "ADD_TO_CART":
            return{
                ...state,
                cart : [...state.cart,action.product]
            };
        case "REMOVE_FROM_CART":
            return{
                ...state,
                cart: state.cart?.filter((e) => {
                    return e.id != action.id;
                })
            };
        default:
            return {state}
    }
}