/**
 * Auth
 *
 * @module      :: Model
 * @description :: Holds all authentication methods for a User
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.auth.attributes({

    username: {
      type: 'string',
      unique: true,
      minLength: 3
    },
    password: {
      type: 'string',
      minLength: 3
    },
    resetToken: {
      model: 'resetToken'
    }
  }),

  beforeCreate: require('waterlock').models.auth.beforeCreate,
  beforeUpdate: require('waterlock').models.auth.beforeUpdate
};
