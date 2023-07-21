// models/index.js
const User = require('./User');
const Diary = require('./Diary');

// Define associations between models if needed
User.hasMany(Diary, { foreignKey: 'user_id' });
Diary.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { User, Diary };
