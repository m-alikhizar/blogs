/*
* action types
*/

export const ADD_BLOG = 'ADD_BLOG';
export const REMOVE_BLOG = 'REMOVE_BLOG';
export const EDIT_BLOG = 'EDIT_BLOG';
export const GET_ALL_BLOG = 'GET_ALL_BLOG';

/*
* action creators
*/

export function addBlog(data) {
    return {
        type: ADD_BLOG,
        data,
    };
}

export function removeBlog(_id) {
    return {
        type: REMOVE_BLOG,
        _id,
    };
}

export function editBlog(_id) {
    return {
        type: EDIT_BLOG,
        _id,
    };
}

export function getAllBlog(data) {
    return {
        type: GET_ALL_BLOG,
        data,
    };
}
