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
        var switchchannel = _ltx2.default.parse("<iq to='" + stz.attrs.from + "' from='" + stz.attrs.to + "' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<switch_channel>" + "<character nick='" + user.nickname + "' gender='" + user.gender + "' height='" + user.height + "' fatness='0' head='" + user.head + "' current_class='" + user.current_class + "' experience='" + user.experience + "' pvp_rating_points='" + user.pvp_rating_points + "' banner_badge='" + user.banner_badge + "' banner_mark='" + user.banner_mark + "' banner_stripe='" + user.banner_stripe + "' game_money='" + user.game_money + "' cry_money='" + user.cry_money + "' crown_money='" + user.crown_money + "'>" +

        // Global chat
        "<chat_channels>" + "<chat channel='0' channel_id='" + query.region_id + "." + query.resource + "' service_id='conference.warface'/>" + "</chat_channels>" + "<profile_progression_state profile_id='" + user.profileid + "' mission_unlocked='none,trainingmission,all' tutorial_unlocked='7' tutorial_passed='7' class_unlocked='29' />" + "</character>" + "</switch_channel>" + "</query>" + "</iq>");
        client.send(switchchannel);
    });
};
//# sourceMappingURL=switchchannel.js.map