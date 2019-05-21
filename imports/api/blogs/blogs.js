import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Blogs = new Mongo.Collection('Blogs'); // eslint-disable-line

Blogs.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

Blogs.schema = new SimpleSchema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    published: {
        type: Boolean, defaultValue: false
    }
});

Blogs.attachSchema(Blogs.schema);
