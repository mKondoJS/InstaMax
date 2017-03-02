
function queryURL(item) {
    const urlVars = window.location.search.substring(1).split("&");

    const res = urlVars.find( function(element) {
        return element.split("=")[0] === item;
    });

    return res.split("=")[1];
}

function getUserInfo() {

    const users = {
        'frodo'    : 'Frodo Baggins',
        'samwise'  : 'Samwise Gamgee',
        'meriadoc' : 'Meriadoc Brandybuck',
        'pippin'   : 'Pippin Took'
    };

    const myName = queryURL('username');

    if( myName ) {
        // set the user info
        $('.userInfo').find('img').attr('src','../img/' + myName + '.jpg');
        $('.userName').text(myName);

        // load suggested friends
        Object.keys(users).forEach( function(user) {
            // just get the people who aren't us
            if (user !== myName) {
                $('.suggestionBox').append(
                    "<div class='suggestionRow'>" +
                    "<div class='suggestionContent'>" +
                    "<div class='suggestionPic'><a href='#'><img src=" + user + "'../client/src/assets/img/.jpg'></a></div>" +
                    "<div class='suggestionNameContainer'><div class='nameBox'>" +
                    "<div class='suggestionName'><a href='#'>" + user + "</a></div>" +
                    "<div class='suggestionFullName'><a href='#'>" + users[user] + "</a></div>" +
                    "</div></div>" +
                    "<button class='fBtn followButton'>Follow</button>" +
                    "</div>" +
                    "</div>");
            }
        });
    }
}


jQuery(document).ready( function() {

    // create some shortcuts to our dynamic content
    // we will delegate events since the nodes won't exist until we load them
    const suggestionBox = $(document).find('.suggestionBox');
    const feedBox = $(document).find('.feedBox');

    // Here's the ne'erdowells that post to our feed
    // of course, this would come from a database in real life
    const posters = {
        0 : { name: 'sauron_trump2020', img: 'sauron'},
        1 : { name: 'Grey_Wanderer', img: 'gandalf' },
        2 : { name: 'elfonashelf', img: 'arwen' },
        3 : { name: 'OneDoesNotSimply', img: 'boromir' }
    };

    // facilitate follow
    suggestionBox.on('click','button',function() {
        if ($(this).text() === 'Follow') {
            $(this).text('Followed');
        }
        else {
            $(this).text('Follow');
        }
        $(this).toggleClass('followButton');
        $(this).toggleClass('followedButton');
    });

    // facilitate likes
    feedBox.on('click', '.likeThis', function() {
        const likeCount = $(this).closest('.feedItem').find('.likeCount');
        var currentLikes = +likeCount.text();

        if($(this).hasClass('liked')) {
            likeCount.text(--currentLikes);
        }
        else {
            likeCount.text(++currentLikes);
        }

        $(this).toggleClass('liked');
    });

    // facilitate comments
    feedBox.on('keyup','.commentInput', function(e) {

        // shrink font size for comment input box
        if( $(this).val().split('').length ) {
            $(this).addClass('textEntered');
        }
        else {
            $(this).removeClass('textEntered');
        }

        // update on enter
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $(this).closest('.feedItem').find('.imgComments').append(
                "<div class='imgComment'><p><span class='commenterName'>" + queryURL('username') + "</span>" + $(this).val() + "</p></div>"
            );

            //clear out the input
            $(this).val('');
        }

    });

    // Returns a random integer between min (included) and max (included)
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // fetch the feed!
    $.get('https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json',
        function(data, status){
            if (status === 'success') {
                $(".loadingSpinner").hide();
                data.forEach( function(img) {
                    // There's a bunch of broken links.  Only load up the good ones!
                    $.get(img, function(data, status) {
                        if(status === 'success') {
                            const index = getRandomIntInclusive(0,3);
                            const hours = getRandomIntInclusive(1,23);
                            feedBox.append(
                                "<div class='feedItem borderedBox'>" +
                                "<div class='feedHeader'>" +
                                "<div class='posterPic'><a href='#'><img src=" + posters[index].img + "'../client/src/assets/img/.jpg'></a></div>" +
                                "<div class='posterNameContainer'><div class='posterName'><a href='#'>" + posters[index].name + "</a></div></div>" +
                                "<div class='postTimer'>" + hours + "h</div>" +
                                "</div>" +
                                "<div class='feedImg'><img src='" + img + "'></div>" +
                                "<div class='imgCommentBox'>" +
                                "<div class='likes'><span class='likeCount'>" + getRandomIntInclusive(0,100) + "</span> likes" + "</div>" +
                                "<div class='imgComments'></div>" +
                                "</div>" +
                                "<div class='commentInputBox'>" +
                                "<div class='likeThis notLiked'></div>" +
                                "<input type='text' class='commentInput' id='newComment' maxlength='1000' placeholder='Add a comment...'>" +
                                "<a href='#'><div class='reportMenu'><img src='../client/src/assets/img/elipse.png'></div></a>" +
                                "</div>" +
                                "</div>");
                        }
                        else {
                            console.log("Status: " + status);
                        }

                    });
                });
            }
            else if (status === 'error') {
                feedBox.append("<div class='feedItem borderedBox'>Cannot load feed</div>");
            }
        });

});
