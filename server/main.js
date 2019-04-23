import { Meteor } from 'meteor/meteor';
import { Blogs } from '../lib/collections';

Meteor.startup(() => {
  // code to run on server at startup

    Meteor.methods({
        'submit_post': (post_data) => {
            console.log(post_data);
            Blogs.insert(post_data);
        }
    });
});
