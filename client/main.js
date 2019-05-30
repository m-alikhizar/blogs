import '../imports/startup/client';

// import { Template } from 'meteor/templating';
// import { Blogs } from '../lib/collections';
import './main.jade'
import './navigation-header-bar.jade'
import * as a from '../imports/startup/server/accounts-config'

//
// if(Meteor.isClient){
//   Template.addPostForm.events({
//     'submit form': function(event, template){
//       event.preventDefault();
//
//       const titleVar = template.find('#titleField').value;
//       const contentVar = template.find('#contentField').value;
//       const publishedVar = template.find('#publishedField').checked;
//
//       const post = {
//         title: titleVar,
//         content: contentVar,
//         published: publishedVar
//       }
//
//       Meteor.call('blogs.methods.add', post);
//     }
//   });
//
//   Template.listBlogPosts.post = function(){
//     return Blogs.find({ published: true });
//   }
// }
