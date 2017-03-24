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

exports.default = function (client, stz) {
    _model2.default.auth.findOne({ username: client.jid.user }, function (err, user) {
        var clans = _ltx2.default.parse("<iq to='" + stz.attrs.from + "' from='" + stz.attrs.to + "' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<clan_list>" + "<clan_performance position='0'>" + "<clan name='Privado' clan_id='1' creation_date='1463967639' master='Rubens' clan_points='0' members='1' master_badge='4294967295' master_stripe='4294967295' master_mark='528'/>" + "</clan_performance>" + "</clan_list>" + "</query>" + "</iq>");
        client.send(clans);
    });
};
//# sourceMappingURL=clans.js.map