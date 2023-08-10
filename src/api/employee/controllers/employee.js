"use strict";

/**
 * employee controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::employee.employee",
  ({ strapi }) => ({
    async generateRandom(ctx) {
      ctx.status = 200;
    },
  })
);
