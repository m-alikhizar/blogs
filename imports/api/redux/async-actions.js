import { Meteor } from 'meteor/meteor';
import { addBlog, getAll, removeBlog, editBlog } from './actions';
import { blogsGetAll, blogsAdd, blogsEdit, blogsRemove } from '../blogs/methods';

export function callAddBlog(message) {
    return dispatch => blogsAdd.call({ message }, (err, result) => {
        if (err) {
            throw new Meteor.Error(err.message);
        } else {
            dispatch(addBlog({ _id: result, message }));
        }
    });
}

export function callGetAllBlog() {
    return dispatch => blogsGetAll.call({}, (err, result) => {
        if (err) {
            throw new Meteor.Error(err.message);
        } else {
            dispatch(getAllBlog(result));
        }
    });
}

export function callRemoveBlog(_id) {
    return dispatch => blogsRemove.call({ blogId: _id }, (err) => {
        if (err) {
            throw new Meteor.Error(err.message);
        } else {
            dispatch(removeBlog(_id));
        }
    });
}

export function callEditBlog(_id) {
    return dispatch => blogsEdit.call({ blogId: _id }, (err) => {
        if (err) {
            throw new Meteor.Error(err.message);
        } else {
            dispatch(editBlog(_id));
        }
    });
}
