'use strict';

/**
 * manage-video router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::manage-video.manage-video');

module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'POST',
        path: '/manageVideo', 
        handler: 'manage-video.create',
      }
    ]
  }
  
      
  