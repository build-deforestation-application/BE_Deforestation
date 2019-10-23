
exports.up = function(knex) {
    return knex.schema.createTable("Forest_dataset_2", table => {
      table.increments("Id");
      table.string("CountryName");
      table.string("CountryCode");
      table.string("Year");
      table.decimal("ForestArea", 8, 1);
      table.decimal("ForestPercofLand", 8, 6);
      table.decimal("AgriPercentage", 8, 6);
      table.integer("UrbanPopulation");
      table.integer("PopulationTotal");
      table.decimal("PopulationGrowthPerc", 8, 6);
      table.decimal("GDPGrowthPerc", 8, 6);
      table.decimal("MiningMetalExports", 8, 6);
      table.decimal("ElectricityConsumptionkwh", 8, 6);
      table.decimal("TertiaryEducation", 8, 6);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("Forest_dataset_2");
  };
  