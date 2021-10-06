const initialState = {
    data: [],
    amount: {}
};

const finance = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPOSIT_AMOUNT':
            return {
                ...state,
                data: action.payload
            };
        case 'WITHDRAW_AMOUNT':
            return {
                ...state, amount: action.payload
            };
        case 'RESET_AMOUNT':
            return {
                ...state, amount: action.payload
            };
        default:
            return state;
    }
};

export default finance;