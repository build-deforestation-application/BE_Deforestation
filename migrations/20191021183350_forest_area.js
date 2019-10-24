exports.up = function(knex) {
  return knex.schema.createTable("ForestDatasetone", table => {
    table.increments("Id");
    table.string("Country_Code");
    table.integer("Year")
    table.string("Forest_Area");
    table.string("Forest_pct");
    table.string("Forest_pct_yoy_change");
    table.decimal("Forest_pct_total_change", 8, 6);
    table.decimal("Agri_land_pct", 8, 6);
    table.decimal("Urban_pop", 8, 6);
    table.decimal("Population_Total", 8, 6);
    table.decimal("Population_growth", 8, 6);
    table.decimal("GDP_growth", 8, 6);
    table.decimal("Mining_metal_exports", 8, 6);
    table.decimal("Electricity_consumption", 8, 6);
    table.decimal("Tertiary_education", 8, 6);
    table.decimal("co2_per_capita", 8, 6);
    table.decimal("2000", 8, 6);
    table.decimal("2001", 8, 6);
    table.decimal("2002", 8, 6);
    table.decimal("2003", 8, 6);
    table.decimal("2004", 8, 6);
    table.decimal("2005", 8, 6);
    table.decimal("2006", 8, 6);
    table.decimal("2007", 8, 6);
    table.decimal("2008", 8, 6);
    table.decimal("2009", 8, 6);
    table.decimal("2010", 8, 6);
    table.decimal("2011", 8, 6);
    table.decimal("2012", 8, 6);
    table.decimal("2013", 8, 6);
    table.decimal("2014", 8, 6);
    table.decimal("2015", 8, 6);
    table.decimal("2016", 8, 6);

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ForestDatasetone");
};
