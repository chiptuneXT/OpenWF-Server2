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

        var playerstatus = _ltx2.default.parse("<iq to='" + stz.attrs.to + "' from='" + stz.attrs.from + "' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<player_status prev_status='" + query.prev_status + "' new_status='" + query.new_status + "' to='" + query.to + "'/>" + "</query>" + "</iq>");
        client.send(playerstatus);
    });
};
//# sourceMappingURL=playerstatus.js.map