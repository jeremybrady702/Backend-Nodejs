const db = require('./dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findByProjectId
};

async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findByProjectId(id) {
  return db('projects')
    .where({ id })
    .first();
}