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

exports.default = function (client, stz, channel) {
    _model2.default.auth.findOne({ username: client.jid.user }, function (err, user) {

        switch (channel) {
            case "pve":

                var pve = _ltx2.default.parse("<iq from='" + stz.attrs.to + "' to='" + stz.attrs.from + "' xml:lang='en' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<get_master_server resource='main_pve_6'  load_index='244'/>" + "</query>" + "</iq>");
                client.send(pve);

                break;
            case "pvp_pro":

                var pvp_pro = _ltx2.default.parse("<iq from='" + stz.attrs.to + "' to='" + stz.attrs.from + "' xml:lang='en' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<get_master_server resource='main_pvp_pro_2'  load_index='255'/>" + "</query>" + "</iq>");
                client.send(pvp_pro);

                break;
            case "pvp_newbie":

                var pvp_newbie = _ltx2.default.parse("<iq from='" + stz.attrs.to + "' to='" + stz.attrs.from + "' xml:lang='en' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<get_master_server resource='main_pvp_newbie_2'  load_index='255'/>" + "</query>" + "</iq>");
                client.send(pvp_newbie);

                break;
        }
    });
};
//# sourceMappingURL=masterserver.js.map