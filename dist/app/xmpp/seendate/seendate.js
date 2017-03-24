'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = require('../../modules/account/model');

var _model2 = _interopRequireDefault(_model);

var _nodeXmppServer = require('node-xmpp-server');

var _nodeXmppServer2 = _interopRequireDefault(_nodeXmppServer);

var _ltx = require('ltx');

var _ltx2 = _interopRequireDefault(_ltx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (client, stz, query) {
    _model2.default.profile.findOne({ username: client.jid.user }, function (err, user) {
        var profile = _ltx2.default.parse("<iq to='" + stz.attrs.from + "' from='" + stz.attrs.to + "' id='" + stz.attrs.id + "' type='get'>" + "<query xmlns='urn:cryonline:k01'>" + "<get_last_seen_date profile_id='" + query.profile_id + "' last_seen='1467033431'/>" + "</query>" + "</iq>");
        client.send(profile);
    });
};
//# sourceMappingURL=seendate.js.map