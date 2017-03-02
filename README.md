#Instagram Clone Challenge!

Today you're going to be building a clone of Instagram, one of the top 5 most popular apps in the world. Instagram reached 100m users in 1 year with just 13 engineers and now presents billions of pictures a day

You are going to build this Instagram clone in 3 days (recommended)

This will test:

- HTML
- CSS
- JavaScript (for dynamic features)

##You will build

#### A User Login page

![](https://www.dropbox.com/s/792mx2tz0k5sset/Screenshot%202015-05-26%2019.18.54_shrink.png?dl=1)

###### The User Login Page should:

- let a user login (not include server-side authentication)
- use JavaScript to check that the user's username and password *matches* some pre-approved usernames and passwords
- send the user to the user's feed once they've entered a correct username and password
- use CSS and HTML to achieve a consistent Instagram style

#### A User Feed page

![](https://www.dropbox.com/s/gs2fn45pjl6z0v0/instagram-feed_shrink.png?dl=1)

###### The User Feed Page should:

- display all the users pictures from their feed (to access these pictures you'll need to make a GET request)
  - Look at these links to learn about making a GET request: [AJAX (jQuery)](http://www.w3schools.com/jquery/jquery_ajax_intro.asp) and [GET/POST](http://www.w3schools.com/jquery/jquery_ajax_get_post.asp)
- should have a header with your user information (profile picture and name)
- should have the ability to like a picture by double clicking on it
- should have the ability to comment on a picture
- use CSS and HTML to achieve a consistent Instagram style

Here is the URL for the data:
```
https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json
```

#### Do's And Don'ts

We will only be modifying the ```client``` folder. There are four files already set up for you inside the ```/client``` folder: ```index.html```, ```feed.html```, ```index.js```, and ```feed.js```. Your work for the login page should be done in ```index.html``` and ```index.js```, while your work for the feed page should be done in ```feed.html``` and ```feed.js```. You should write all your JavaScript codes inside the ```.js``` files. You may do your CSS styling inside the HTML files or you may create separate CSS files and link them to the HTML files. You can also create and add more files if you need to. DO NOT modify any other files or folders. You can take a look at the original Instagram page for structural information.

## DOM

For this challenge, you will need to perform DOM Manipulation. The following links will provide you with a better idea about the document object model.

### Tutorial
- Manipulating the DOM with [JQuery] (https://www.codeschool.com/courses/try-jquery)
- Working with [Chrome Dev Tools](https://www.codeschool.com/courses/discover-devtools)
