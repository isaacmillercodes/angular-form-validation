(function() {
  'use strict';
  const app = angular.module('formApp', []);

  app.controller('formCtrl', function() {
    this.users = [];
    // this.username = '';
    // this.password = '';
    // this.email = '';
    // this.zipcode = '';

    this.submit = function(form) {
      console.log('!!');
      let user = {};
      user.username = this.username;
      user.password = this.password;
      user.email = this.email;
      user.zipcode = this.zipcode;

      let existingUser = this.users.filter(oldUser => {
        return oldUser.username === this.username;
      })[0];

      if (existingUser) {
        this.error = 'That username is already taken. Please try again.';
      } else {
        this.users.push(user);
      }
      this.username = '';
      this.password = '';
      this.email = '';
      this.zipcode = '';
      form.$setPristine();
      form.$setUntouched();
    };

  });

}());
