const initialState = [];


export const productsAction = (item) => ({
    type: 'LIST_ITEM',
    item: item
});

function productsReducer(state = initialState, action) {

    switch (action.type) {
        case 'LIST_ITEM':
            return {
                ...state,
                Home: action.item,
            };

        default: return state;
    }
}


export default productsReducer;