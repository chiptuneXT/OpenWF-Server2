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

    //.replace('data-','');


    _model2.default.profile.findOne({ username: client.jid.user }, function (err, user) {

        var statusupdate = _ltx2.default.parse("<iq to='" + stz.attrs.to + "' from='" + stz.attrs.from + "' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<peer_status_update nickname='" + user.nickname + "' profile_id='" + user.profileid + "' status='" + query.status + "' experience='" + user.experience + "' place_token='" + query.place_token + "' place_info_token='" + query.place_info_token + "' mode_info_token='" + query.mode_info_token + "' mission_info_token='" + query.mission_info_token + "'/>" + "</query>" + "</iq>");
        client.send(statusupdate);
    });
};
//# sourceMappingURL=statusupdate.js.map