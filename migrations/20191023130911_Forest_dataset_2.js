exports.up = function(knex) {
  return knex.schema.createTable("ForestDatasettwo", table => {
    table.increments("queryId");
    table
      .bigInteger("fid")
      .references("userId")
      .inTable("Users");
    table.string("queries");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ForestDatasettwo");
};
// {
//     "CountryName": "Kosovo",
//     "CountryCode": "XKX",
//     "Year": 2016,
//     "ForestArea": -9999,
//     "ForestPercofLand": -9999,
//     "AgriPercentage": -9999,
//     "UrbanPopulation": -9999,
//     "PopulationTotal": 1816200,
//     "PopulationGrowthPerc": 0.796024104,
//     "GDPGrowthPerc": 3.231551214,
//     "MiningMetalExports": -9999,
//     "ElectricityConsumptionkwh": -9999,
//     "TertiaryEducation": -9999
//   },
