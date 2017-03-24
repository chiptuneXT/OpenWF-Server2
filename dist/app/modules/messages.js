'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = require('./account/model');

var _model2 = _interopRequireDefault(_model);

var _nodeXmppServer = require('node-xmpp-server');

var _nodeXmppServer2 = _interopRequireDefault(_nodeXmppServer);

var _ltx = require('ltx');

var _ltx2 = _interopRequireDefault(_ltx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (server, config) {
    server.on('connect', function (client) {
        client.on('stanza', function (stz) {
            _model2.default.auth.findOne({ username: client.jid.user }, function (err, user) {
                if (stz.is('message')) {
                    var query = stz.getChild('body').children[0];
                    var message = _ltx2.default.parse("<message from='" + stz.attrs.to + "/" + user.nickname + "' to='" + stz.attrs.from + "' type='groupchat'>" + "<body>" + query + "</body>" + "</message>");
                    client.send(message);
                }
            });
        });
    });
};
//# sourceMappingURL=messages.js.map