Now that you have a solid understanding of these properties/classes, let's build another form with an action of "#" and four text inputs for a username, password, email and zip code. Your form should validate that the username and password are both between 3 and 12 characters long. It should also make sure that the email is a valid email and that the zip code is a five digit number (use ng-pattern and regular expressions for this!).

Now that we have an idea of how to style and display error messages, let's do the following:

Display error messages if inputs are invalid
Add a class of invalid if the validation fails
Add a class of valid if the validation passes
Only display the error message/styling if the user has typed something
When the form is submitted, collect the inputs, add them to an array called users in your controller, and then clear out all inputs -- the page should not refresh!
Make sure to clear out all the form values and validations. You can use a method from here to do that
Display the array of users at the top of the page after page submission
When you reuse the form (without refreshing the page) and type in the same username, display an error message that says that username is already taken.
