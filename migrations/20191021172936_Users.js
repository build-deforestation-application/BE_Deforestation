exports.up = function(knex) {
  return knex.schema.createTable("Users", table => {
    table.increments("userId");
    table.string("userName").notNullable();

    table
      .string("email")
      .unique()
      .notNullable();

    table.string("password").notNullable();

    table.string("passwordtoken");

    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Users");
};
