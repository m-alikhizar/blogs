AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    defaultState: "signIn",
    enablePasswordChange: false,
    enforceEmailVerification: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: true,
    lowercaseUsername: true,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc,
    preSignUpHook: myPreSubmitFunc,
    postSignUpHook: myPostSubmitFunc,

    // Texts

    texts: {
        button: {
            changePwd: "Password Text",
            enrollAccount: "Enroll Text",
            forgotPwd: "Forgot Pwd Text",
            resetPwd: "Reset Pwd Text",
            signIn: "Sign In Text",
            signUp: "Sign Up Text",
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            changePwd: "Password Title",
            enrollAccount: "Enroll Title",
            forgotPwd: "Forgot Pwd Title",
            resetPwd: "Reset Pwd Title",
            signIn: "Sign In Title",
            signUp: "Sign Up Title",
            verifyEmail: "Verify Email Title",
        },



        navSignIn: "signIn",
        navSignOut: "signOut",
        optionalField: "optional",
        pwdLink_pre: "",
        pwdLink_link: "forgotPassword",
        pwdLink_suff: "",
        resendVerificationEmailLink_pre: "Verification email lost?",
        resendVerificationEmailLink_link: "Send again",
        resendVerificationEmailLink_suff: "",
        sep: "OR",
        signInLink_pre: "ifYouAlreadyHaveAnAccount",
        signInLink_link: "signin",
        signInLink_suff: "",
        signUpLink_pre: "dontHaveAnAccount",
        signUpLink_link: "signUp",
        signUpLink_suff: "",
        socialAdd: "add",
        socialConfigure: "configure",
        socialIcons: {
            // google: "myGoogleIcon",
            // "meteor-developer": "myMeteorIcon",
        },
        inputIcons: {
            isValidating: "fa fa-spinner fa-spin",
            hasSuccess: "fa fa-check",
            hasError: "fa fa-times",
        },
        errors: {
            accountsCreationDisabled: "Client side accounts creation is disabled!!!",
            cannotRemoveService: "Cannot remove the only active service!",
            captchaVerification: "Captcha verification failed!",
            loginForbidden: "error.accounts.Login forbidden",
            mustBeLoggedIn: "error.accounts.Must be logged in",
            pwdMismatch: "error.pwdsDontMatch",
            validationErrors: "Validation Errors",
            verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",
        },
        socialRemove: "remove",
        socialSignIn: "signIn",
        socialSignUp: "signUp",
        socialWith: "with",
        termsPreamble: "clickAgree",
        termsPrivacy: "privacyPolicy",
        termsAnd: "and",
        termsTerms: "terms",
    }
});



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

AccountsTemplates.configure({
    onSubmitHook: onSubmitHook,
    onLogoutHook: onLogoutHook,
    showReCaptcha: true,

    reCaptcha: {
        siteKey: Meteor.settings.public.reCaptcha.siteKey
        theme: "light",
        data_type: "image"
    },
})
