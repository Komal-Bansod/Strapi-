"use strict";

/**
 * manage-video controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::manage-video.manage-video",
  ({ strapi }) => ({
    async create(ctx) {
      // some logic
      const response = await super.create(ctx);

      var id = ctx.state.auth.credentials.username;
      console.log(id);
      var entries = await strapi.db
        .query("api::video-status.video-status")
        .findOne({
          where: {
            username: id,
          },
        });
      console.log(entries);

      if (entries) {
        var count = entries.videoCount;
        console.log(count);
        const updateVideo = await strapi.db
          .query("api::video-status.video-status")
          .update({
            where: {
              username: id,
            },
            data: {
              videoCount: count + 1,
            },
          });
      } else {
        console.log(ctx.state.user.username);
        strapi.entityService.create("api::video-status.video-status", {
          data: {
            username: ctx.state.user.username,
            videoCount: 1,
          },
        });
      }
      return response;
    },
  })
);
