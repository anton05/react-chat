import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialData = {
    messageItems: [],
};

const messageReducer = (state = initialData, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messageItems: [...state.messageItems, { text: action.payload }]
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messageItems: [...state.messageItems.filter((message) => message.text !== action.payload)]
            }

        default:
            return state;
    }
}

export default messageReducer;