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

Router.route('/match/:_id?', {
  name: 'match',
  controller: 'MatchController'
});
