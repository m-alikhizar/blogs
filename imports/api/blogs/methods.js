import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Blogs } from './blogs';

export const blogsGet = new ValidatedMethod({
    name: 'blogs.methods.get',
    validate: new SimpleSchema({ blogId: { type: String } }).validator(),
    run({ blogId }) {
        return Blogs.findOne(blogId);
    },
});

export const blogsGetAll = new ValidatedMethod({
    name: 'blogs.methods.getAll',
    validate: new SimpleSchema({}).validator(),
    run() {
        return Blogs.find().fetch();
    },
});

export const blogsAdd = new ValidatedMethod({
    name: 'blogs.methods.add',
    validate: Blogs.schema.validator(),
    run({ title, content, published }) {
        return Blogs.insert({ title, content, published });
    },
});

export const create = new ValidatedMethod({
    name: 'blogs.methods.create',
    validate: Blogs.schema.validator(),
    run({ title, content, text, published }) {

        const user = Meteor.user()
        console.log(user)
        return Blogs.insert({ title, content, text, published });
    },
});

export const blogsRemove = new ValidatedMethod({
    name: 'blogs.methods.remove',
    validate: new SimpleSchema({ blogId: { type: String } }).validator(),
    run({ blogId }) {
        return Blogs.remove({ _id: blogId });
    },
});

export const blogEdit = new ValidatedMethod({
    name: 'blogs.methods.edit',
    validate: new SimpleSchema({ blogId: { type: String } }).validator(),
    run({ blogId }) {
        const blogObj = Blogs.findOne(blogId);
        const state = blogObj && blogObj.finished;
        return Blogs.update({ _id: blogId }, { $set: { finished: !state } });
    },
});

