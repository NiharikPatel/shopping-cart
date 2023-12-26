import React,{createContext, useReducer, useContext} from "react";


const CartContext = createContext();

const initialCartState = [];
// Creating Cart Context for storing the state and reusing it in other component
const cartReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            const {id, title, price, thumbnail, discountPercentage} = action.product;
            const newCart = [...state];
            const existingProductIndex = newCart.findIndex((product)=> product.id === id);
            if (existingProductIndex !== -1){
                newCart[existingProductIndex] = {...newCart[existingProductIndex].quantity +1}
            }
            else{
                newCart.push({id, title, price, thumbnail,discountPercentage, quantity: 1})
            }
            return newCart
         
        case 'INCREASE_QUANTITY':
            const increase_quantity = state.map((product)=>
                product.id === action.id && product.quantity > 0?{...product, quantity: product.quantity + 1}
            :product
        );
        return increase_quantity

        case 'DECREASE_QUANTITY':
            const decreaseCart =  state.map((product) =>
            product.id === action.id && product.quantity >= 1
            
            ?{...product, quantity:product.quantity -1}
           
            :product
            );
            const filteredCart = decreaseCart.filter((product) => product.quantity > 0);

            return filteredCart;

        default:
            return state;

    }
};
    export const CartProvider = ({children}) => {
        const[cart, dispatch] = useReducer(cartReducer, initialCartState);
    
        return(
            <CartContext.Provider value = {{cart, dispatch}}>
            {children}
            </CartContext.Provider>
        );
    };
    
    export const useCart = () =>
    {
        const context = useContext(CartContext);
        if(!context){
            throw new Error('useCart must be used within a CartProvider');
        }
        return context;
    };
