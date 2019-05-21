import { combineReducers } from 'redux';
import { ADD_BLOG, REMOVE_BLOG, EDIT_BLOG, GET_ALL_BLOG } from './actions';

const remove = (state, action) => {
    const elemToRemoveArray = state.slice().filter(item => item._id === action._id);
    if (Array.isArray(elemToRemoveArray)) {
        const elemToRemoveIndex = state.indexOf(elemToRemoveArray[0]);
        return [
            ...state.slice(0, elemToRemoveIndex),
            ...state.slice(elemToRemoveIndex + 1),
        ];
    }
    return state;
};

const edit = (state, action) => {
    const elemToEditArray = state.slice().filter(item => item._id === action._id);
    if (Array.isArray(elemToEditArray)) {
        const elemToEditIndex = state.indexOf(elemToEditArray[0]);
        const newState = state.slice();
        newState[elemToEditIndex].finished = !newState[elemToEditIndex].finished;
        return newState;
    }
    return state;
};

function blogs(state = [], action) {
    switch (action.type) {
        case ADD_BLOG:
            return state.concat([action.data]);
        case REMOVE_BLOG:
            return remove(state, action);
        case EDIT_BLOG:
            return edit(state, action);
        case GET_ALL_BLOG:
            return action.data;
        default:
            return state;
    }
}

const mainReducer = combineReducers({
    blogs,
});

export default mainReducer;
