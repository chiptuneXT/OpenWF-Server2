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
        var contracts = _ltx2.default.parse("<iq to='" + stz.attrs.from + "' from='" + stz.attrs.to + "' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<get_contracts>" + "<contract profile_id='" + user.profileid + "' rotation_id='3' contract_name='' current='0' total='0' rotation_time='473.452889' status='0' is_available='0'/>" + "</get_contracts>" + "</query>" + "</iq>");
        client.send(contracts);
    });
};
//# sourceMappingURL=contracts.js.map