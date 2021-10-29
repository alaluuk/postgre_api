const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  get: function(callback) {
    return db.query('select * from user_table', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from user_table where id_user=?', [id], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('insert into user_table (username, images, password) values(?,?,?)',
      [user.username, user.images, hash], callback);
    });
  },
  delete: function(id, callback) {
    return db.query('delete from user_table where id_user=?', [id], callback);
  },
  update: function(id, user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('update user_table set username=?, images=?, password=? where id_user=?',
      [user.username, user.images, hash, id], callback);
    });
  }

}
          
module.exports = user;