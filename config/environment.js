'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'base-web',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
      apiKey: "AIzaSyDj2IlkR7p26YuTDy_F91-3jrPPevrwpMk",
      authDomain: "basic-web.firebaseapp.com",
      databaseURL: "https://basic-web.firebaseio.com",
      projectId: "basic-web",
      storageBucket: "basic-web.appspot.com",
      messagingSenderId: "781449387635"
    },

    torii: {
      sessionServiceName: 'session'
    }

    /*cloudinary: {
      uploadPreset: {
        image: process.env.CLOUDINARY_IMAGE,
        video: process.env.CLOUDINARY_VIDEO
      },
      url: process.env.CLOUDINARY_URL
    },*/
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
