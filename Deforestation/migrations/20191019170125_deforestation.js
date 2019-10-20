exports.up = function(knex) {
  return knex.schema.createTable("Users", table => {
    table.increments("userId");
    table.string("userName").notNullable();
    table.string("firstName");
    table.string("lastName");
    table.string("dataQuery");
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("img");
    table.string("address");
    table.string("city");
    table.string("state");
    table.string("zipcode");
    table.string("latitude");
    table.string("longitude");
    table.string("passwordtoken");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Users");
};
