
Router.configure({
  layoutTemplate: 'layout',
  loadingTempalte: 'loading',
  notFoundTemplate: 'notFound',
});

Router.map(function () {

  /*
   * Client Routes */
  
  this.route('home', {
    path: '/',
  });

  this.route('posts', {
    path: '/posts',
  });


  /*
   * Admin Routes */

  this.route('admin', {
    path: '/admin',
  });

  this.route('admin-new', {
    path: '/admin/new',
  });

  this.route('admin-posts', {
    path: '/admin/posts',
  });

  this.route('admin-pages', {
    path: '/admin/pages',
  });
  
  this.route('admin-settings', {
    path: '/admin/settings',
  });


});


