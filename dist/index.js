'use strict';

var _nodeXmppServer = require('node-xmpp-server');

var _nodeXmppServer2 = _interopRequireDefault(_nodeXmppServer);

var _ltx = require('ltx');

var _ltx2 = _interopRequireDefault(_ltx);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _db = require('./app/core/db');

var _db2 = _interopRequireDefault(_db);

var _dependencies = require('./app/core/dependencies');

var _dependencies2 = _interopRequireDefault(_dependencies);

var _config = require('./app/core/config.json');

var _config2 = _interopRequireDefault(_config);

var _model = require('./app/modules/account/model');

var _model2 = _interopRequireDefault(_model);

var _messages = require('./app/modules/messages');

var _messages2 = _interopRequireDefault(_messages);

var _presence = require('./app/modules/presence');

var _presence2 = _interopRequireDefault(_presence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _db2.default)(function (db) {

  var server = new _nodeXmppServer2.default.C2SServer({
    port: 5222,
    domain: 'warface',
    tls: {
      keyPath: __dirname + '/app/tls/warface.key',
      certPath: __dirname + '/app/tls/warface.crt'
    }
  });

  (0, _dependencies2.default)(server, _config2.default);

  // Modules XMPP
  (0, _messages2.default)(server, _config2.default);
  (0, _presence2.default)(server, _config2.default);

  server.on("connect", function (client) {

    client.on("authenticate", function (opts, cb) {
      _model2.default.auth.findOne({ username: opts.jid.local }, function (err, user) {
        if (err) console.log(err);
        if (user.username && opts.password) cb(null, opts);else cb(new Error("Authentication failure"));
      });
    });

    client.on('offline', function () {
      console.log('saiu');
    });
  });
});
//# sourceMappingURL=index.js.map