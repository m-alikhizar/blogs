import '../../api/blogs/blogs';
import '../../api/blogs/methods';


if (Meteor.isServer){
    Meteor.methods({
        "userExists": function(username){
            const ans =  !!Meteor.users.findOne({username: username})
            console.log(ans)
            return ans;
        },
    });
}


