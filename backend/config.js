const path = require('path');

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, 'public/uploads'),
  db: {
    url: 'mongodb://localhost/chat',
  },
//   google: {
//     clientId: '810927471031-rp610u0qpftkde3e8u3v9vjeauap6nfc.apps.googleusercontent.com'
//   },
};