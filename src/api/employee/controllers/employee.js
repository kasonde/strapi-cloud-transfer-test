"use strict";

const { faker } = require("@faker-js/faker");
const uuid = require("uuid");
/**
 * employee controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::employee.employee",
  ({ strapi }) => ({
    async generateRandom(ctx) {
      // !!!!! THIS IS HORRIBLY INEFFICIENT! DO NOT DO THIS IN PROD
      for (let count = 0; count < 1000; count++) {
        const employee = {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          man_number: uuid.v4(),
          birthDate: faker.date.birthdate().toDateString(),
          department: faker.person.jobArea(),
        };
        strapi.entityService.create("api::employee.employee", {
          data: employee,
        });
      }
      // !!!!! THIS IS HORRIBLY INEFFICIENT! DO NOT DO THIS IN PROD
      ctx.status = 200;
      ctx.send = "done";
    },
  })
);
