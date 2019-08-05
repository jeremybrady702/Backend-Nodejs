module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/SIXRuser.db3' }, // change this if you want a different name for the database
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: './database/migrations',
      tableName: 'SIXRuserdb'
      
    },
    seeds: { directory: './database/seeds' },
  },
};
