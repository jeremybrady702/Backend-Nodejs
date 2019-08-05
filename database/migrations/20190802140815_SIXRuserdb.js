
exports.up = function(knex) {
    return knex.schema.createTable('SIXRusers', users => {
      users.increments('id');
  
      users
        .string('username', 255)
        .notNullable()
        .unique();
        users.string('password', 255).notNullable();
        //many to many for projects I think is best here
        users.bool('is_mentor', 'is_admin');
        
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };


  //knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id')
// Outputs:
// select * from `users` inner join `accounts` on `users`.`id` = `accounts`.`user_id`

// //knex.table('users').innerJoin('accounts', 'users.id', '=', 'accounts.user_id')
// Outputs:
// select * from `users` inner join `accounts` on `users`.`id` = `accounts`.`user_id`
// knex('users').innerJoin('accounts', function() {
//   this.on('accounts.id', '=', 'users.account_id').orOn('accounts.owner_id', '=', 'users.id')
// })
// Outputs:
// select * from `users` inner join `accounts` on `accounts`.`id` = `users`.`account_id` or `accounts`.`owner_id` = `users`.`id`