const initialState = {
    productList : {
        products: [],
        error: null,
        loading: false
    },
    activeProduct: {
        product: null,
        error: null,
        loading: false
    },
    cart: {
        items: null,
        total: 0
    }
};

export default initialState;