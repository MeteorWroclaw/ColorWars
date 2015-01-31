Router.configure({
  // layoutTemplate
  // loadingTemplate
  // notFoundTemplate
});

Router.route('/', {
  name: 'root',
  controller: 'MainPageController'
});

Router.route('/profile', {
  name: 'profile',
  controller: 'ProfileController'
});
