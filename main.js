$(document).ready(function () {
    console.log("document Ready");
    var forgetPasswordDiv = $('.forgetPasswordField');
    var CreateAccountDiv = $('.createAccount');
    var termsConditionsDiv = $('.termsAndConditionsField');
    var signDiv = $('.signAccount');
    var nameInput = $('.registerName');

    termsConditionsDiv.hide();
    nameInput.hide();
    signDiv.hide();

    // When click the Create a New Account in login screen
    $('#register').click(function () {
        nameInput.show();
        termsConditionsDiv.show();
        signDiv.show();

        forgetPasswordDiv.hide();
        CreateAccountDiv.hide();

        $('#loginBtn').text("Sign Up");
        $('.loginHeading').text("Sign Up");
        $('.dividerText').text("or Sign up with Email");

        let html = '';
        html += '<img src="img/google.svg" style="width:30px;margin-top: -6px;" />&nbsp;&nbsp;';
        html += 'Sign up with Google'
        $('.googleSignupBtnTextChange').html(html);
    })

    $('#signIn').click(function () {
        nameInput.hide();
        termsConditionsDiv.hide();
        signDiv.hide();

        forgetPasswordDiv.show();
        CreateAccountDiv.show();

        $('#loginBtn').text("Login");
        $('.loginHeading').text("Login");
        $('.dividerText').text("or Sign in with Email");

        let changeHtml = '';
        changeHtml += '<img src="img/google.svg" style="width:30px;margin-top: -6px;" />&nbsp;&nbsp;';
        changeHtml += 'Sign in with Google'
        $('.googleSignupBtnTextChange').html(changeHtml);
    })
});