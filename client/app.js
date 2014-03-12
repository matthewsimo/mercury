
Router.configure({
  layoutTemplate: 'layout',
  loadingTempalte: 'loading',
  notFoundTemplate: 'notFound',
});

Router.map(function () {

  this.route('home', {
    path: '/',
  });

  this.route('admin', {
    path: '/admin',
  });

  this.route('posts', {
    path: '/posts',
  });

});


