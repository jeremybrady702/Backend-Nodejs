exports.up = function(knex) {
    return knex.schema.createTable('journals', projects => {
      journals.increments('id');
  
      journals
        .string('subject', 255)
        journals.string('entry', 10000)
        //many to many for projects I think is best here
        journals.bool('isMentor');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };
