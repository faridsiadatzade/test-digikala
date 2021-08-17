const initialState = [];


export const addTocCardAction = (item) => ({
    type: 'ADD_ITEM',
    item: item
});

export const removeCardAction = (item) => ({
    type: 'REMOVE_ITEM',
    item: item
});

export const removeSectionAction = (item) => ({
    type: 'REMOVE_SECTION',
    item: item
});

export const removeAction = () => ({
    type: 'REMOVE',
});


function bascketReducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD_ITEM':
            let newState = [...state];
            let index = state.findIndex(s => s.item.id === action.item.id);
            if (index > -1) {
                newState[index] = { item: state[index].item, count: state[index].count + 1 }
            } else {
                newState.push({ item: action.item, count: 1 });
            }
            return newState;
        case 'REMOVE_ITEM':
            let newState2 = [...state];
            let index2 = state.findIndex(s => s.item.id === action.item.id);
            if(index2 === -1) return state;
            if (newState2[index2].count === 1) {
                newState2.splice(index2, 1);
                return newState2;
            } else {
                 newState2[index2] = { item: state[index2].item, count: state[index2].count - 1 };
                 return newState2;
            }
        case 'REMOVE_SECTION':
            let index3 = state.filter(s => s.item.id !== action.item.id);
            return index3;
        case 'REMOVE':
            return [];

        default: return state;

    }
}


export default bascketReducer