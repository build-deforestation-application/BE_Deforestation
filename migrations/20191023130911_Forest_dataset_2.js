exports.up = function(knex) {
  return knex.schema.createTable("Forest_dataset_2", table => {
    table.increments("Id");
    table.string("CountryName");
    table.string("CountryCode");
    table.string("Year");
    table.string("ForestArea");
    table.string("ForestPercofLand");
    table.string("AgriPercentage");
    table.string("UrbanPopulation");
    table.string("PopulationTotal");
    table.string("PopulationGrowthPerc");
    table.string("GDPGrowthPerc");
    table.string("MiningMetalExports");
    table.string("ElectricityConsumptionkwh");
    table.string("TertiaryEducation");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Forest_dataset_2");
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
