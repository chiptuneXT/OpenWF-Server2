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
            if (stz.is('presence')) {
                var presence = _ltx2.default.parse("<presence from='" + stz.attrs.to + "' to='" + stz.attrs.from + "' xml:lang='en' />");
                client.send(presence);
            }
        });
    });
};
//# sourceMappingURL=presence.js.map