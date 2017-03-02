var mIntervId;

// loop through images on mobile splash
function startMobileImgLoop() {
    mIntervId = setInterval(loopMobileImg, 5000);
}

function mobileImageCreator () {
    var index = 1;
    // Use closure to track image index through multiple calls
    return function () {
        index = index < 5 ? index + 1 : 1;
        var img = '../img/mScreen' + index + '.png';
        $("#mobilePics").css('background-image' , 'url(' + img + ')');
    }
}

var loopMobileImg = mobileImageCreator();


jQuery(document).ready( function() {

    function isValidUsername(username) {
        /*Username must be at least three characters, all alphanumeric, starting with alpha */
        var pattern = new RegExp(/^[A-z]\w\w+$/);
        return pattern.test(username);
    }

    function verifyUser(username, password) {
        var users = {
            'frodo' : 'baggins',
            'samwise' : 'gamgee',
            'meriadoc' : 'brandybuck',
            'pippin' : 'took'
        };

        if (username in users) {
            return users[username] === password;
        }
    }

    $("#loginForm").on('click', 'button', function() {

        // we want to do some validation before we submit the form so prevent the default behavior
        event.preventDefault();

        // if they entered a username/login, validate it before submitting
        if ( $(this)[0].id === "loginBtn") {
            var errorMessage = "<ul>";
            var username = $("#user").val();
            var password = $("#password").val();

            if (!isValidUsername(username)) {
                errorMessage = errorMessage + "<li>> Your username cannot start with a number, contain special characters, or be fewer than three alphanumeric characters!</li>";
            }

            if (!password) {
                errorMessage = errorMessage + "<li>> Please enter a password!</li>";
            }

            if (errorMessage === "<ul>") {
                // verify the user exists
                if (!verifyUser(username, password)) {
                    errorMessage = errorMessage + "<li>Sorry, this username and password combination is not valid!</li>";
                }
                else {
                    $("#username").val(username);
                    // if we have no issues, submit the form
                    $("#loginForm").submit();
                }
            }

            errorMessage = errorMessage + "</ul>";
            $("#loginText")[0].innerHTML = errorMessage;
            $("#loginText").slideDown();

        }
        else{ // Frodo is 'logging in with Facebook'
            $("#username").val('frodo');
            $("#loginForm").submit();
        }
    });

    $(".loginInput").on('focus', function() {
        $("#loginText").slideUp();
    });



});