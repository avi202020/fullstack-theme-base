const jwt = require('jsonwebtoken');
const config = require('./utils/config');
const User = require('./models/user');

const context = async ({ req }) => {
  const auth = req ? req.headers.authorization : null;
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    const decodedToken = jwt.verify(auth.substring(7), config.JWT_SECRET);
    const currentUser = await User.findById(decodedToken.id);
    return { currentUser };
  }
  return null;
};

module.exports = context;
