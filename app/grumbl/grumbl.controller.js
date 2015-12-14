var app = angular.module('grumblr')
app.controller("grumblController", function(){
  this.grumbls = [
    {
      title: 'zero',
      authorName: 'name',
      content: 'asdf',
      photoUrl: 'http://placecage.com/200/200'
    },

    {
      title: 'one',
      authorName: 'name2',
      content: 'asdf',
      photoUrl: 'http://placecage.com/200/200'
    },

    {
      title: 'two',
      authorName: 'asdfasdf',
      content: 'asdfasdfasdf',
      photoUrl: 'http://placecage.com/200/200'
    },

    {
      title: 'three',
      authorName: 'qwerqwer',
      content: 'q w e r',
      photoUrl: 'http://placecage.com/200/200'
    },

    {
      title: 'four',
      authorName: '!!!!',
      content: '~_~',
      photoUrl: 'http://placecage.com/200/200'
    }
  ];

  this.formIsVisible = false;
  this.toggleForm = function(){
    console.log("form toggled");
    if(this.formIsVisible){
      this.formIsVisible = false;
    }
    else {
      this.formIsVisible = true;
    }
  };

  this.create = function(){
    var newGrumbl = {
      title: this.title,
      authorName: this.authorName,
      content: this.content,
      photoUrl: this.photoUrl
    }
    this.grumbls.unshift(newGrumbl);
    console.log(this.grumbls)
  }

  this.edit = function(index){
    var grumbl = this.grumbls[index];
    this.title = grumbl.title;
    this.authorName = grumbl.authorName;
    this.content = grumbl.content;
    this.photoUrl = grumbl.photoUrl;
  }

  this.update = function(index){
    var grumbl = this.grumbls[index];
    grumbl.title = this.title;
    grumbl.authorName = this.authorName;
    grumbl.content = this.content;
    grumbl.photoUrl = this.photoUrl;
  }

  this.delete = function(index){
    this.grumbls.splice(index, 1);
  }

})
