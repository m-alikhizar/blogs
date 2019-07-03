import './security';
import './register-api'
import './ssr-init'
// import './accounts-config'

T9n.setLanguage('en');

//const T9n = (require('meteor-accounts-t9n')).T9n
//T9n.setTracker(require('meteor/tracker'))
//T9n.map('en')


if (typeof(famous) !== 'undefined') {
    FView.startup();
} else {
    console.log('..................');
    Meteor.startup(function() {
        console.log('..................1');
        if (typeof(famous) !== 'undefined') {
            console.log('..................2');
            FView.startup();
        }
    });
}