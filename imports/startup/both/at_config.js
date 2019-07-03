const onSubmitHook = function(error, state){
    if (!error) {
        if (state === "signIn") {
            // Successfully logged in
            // ...
        }
        if (state === "signUp") {
            // Successfully registered
            // ...
        }
    }
}

const onLogoutHook = function(){
    Router.go('/home');
}

const onPreSignUpHook = function() {

}

const onPostSignUpHook = function() {

}

Accounts.config({
    forbidClientAccountCreation: false
});

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    defaultState: "signIn",
    enablePasswordChange: true,
    enforceEmailVerification: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: false,
    sendVerificationEmail: true,
    lowercaseUsername: true,
    focusFirstInput: true,
    socialLoginStyle: 'popup',


    // Appearance
    hideSignInLink: false,
    hideSignUpLink: false,
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: true,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    privacyUrl: '/privacy',
    termsUrl: '/',
    redirectTimeout: 4000,

    // Hooks
    onSubmitHook: onSubmitHook,
    onLogoutHook: onLogoutHook,
    preSignUpHook: onPreSignUpHook,
    postSignUpHook: onPostSignUpHook,

    showReCaptcha: false,

    reCaptcha: {
        siteKey: Meteor.settings.public.reCaptcha.siteKey,
        theme: "light",
        data_type: "image"
    },

    // Texts

    texts: {
        button: {
            signUp: "Create"
        },
        socialSignUp: "Create an account",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            forgotPwd: "Recover Your Password"
        },
    }
})

AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: 'username',
        type: 'text',
        required: true,
        func: function(value){
            if (Meteor.isClient) {
                var self = this;
                Meteor.call("userExists", value, function(err, userExists){
                    if (!userExists)
                        self.setSuccess();
                    else
                        self.setError(userExists);
                    self.setValidating(false);
                });
                return;
            }
            // Server
            return Meteor.call("userExists", value);
        },
        errStr: 'username already exists!',
    },
    {
        _id: 'email',
        type: 'email',
        required: true,
        displayName: "email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
    },
    {
        _id: 'username_and_email',
        placeholder: 'username',
        type: 'text',
        required: true,
        displayName: "Username or Email",
    }
]);

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    placeholder: {
        signUp: "At least six characters"
    },
    required: true,
    minLength: 6,
    re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lowercase and 1 uppercase',
});
