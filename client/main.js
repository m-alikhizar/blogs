import { Template } from 'meteor/templating';
import { Blogs } from '../lib/collections';

import './main.html'
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';
//
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

if(Meteor.isClient){
  Template.addPostForm.events({
    'submit form': function(event, template){
      event.preventDefault();

      const titleVar = template.find('#titleField').value;
      const contentVar = template.find('#contentField').value;
      const publishedVar = template.find('#publishedField').checked;

      const post = {
        title: titleVar,
        content: contentVar,
        published: publishedVar
      }

      Meteor.call('submit_post', post);
    }
  });

  Template.listBlogPosts.post = function(){
    return Blogs.find({ published: true });
  }
}
