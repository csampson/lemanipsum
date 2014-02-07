module.exports = function ( karma ) {
  karma.configure({
    files: [
      'assets/js/vendor/jquery/jquery.min.js',
      'assets/js/vendor/angular/angular.min.js',
      'assets/js/vendor/angular-mocks/angular-mocks.js',
      'assets/js/vendor/lodash/dist/lodash.min.js',
      'assets/js/app.js',
      'assets/js/app_spec.js',
    ],

    frameworks: [ 'jasmine' ],

    plugins: [ 'karma-jasmine', 'karma-phantomjs-launcher' ],

    reporters: 'dots',

    autoWatch: true,

    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    browsers: [ 'PhantomJS' ]
  });
};
