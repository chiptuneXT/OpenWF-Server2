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

function getObjective(obj) {
    var list = '';
    for (var i = 0; i < obj.length; i++) {
        list += "<objective id='" + obj[i].id + "' type='" + obj[i].type + "'/>";
    }
    return list;
}

function getCrownRewardsThresholds(obj) {
    var list = '';
    if (obj['totalperformance']) {
        list += "<TotalPerformance bronze='" + obj['totalperformance'].bronze + "' silver='" + obj['totalperformance'].silver + "' gold='" + obj['totalperformance'].gold + "'/>";
    } else if (obj['time']) {
        list += "<Time bronze='" + obj['time'].bronze + "' silver='" + obj['time'].silver + "' gold='" + obj['time'].gold + "'/>";
    }
    return list;
}

function parseXMLModel(i) {

    var get1, get2, get3, get4, get5;

    get1 = "<mission mission_key='" + i.mission_key + "' no_teams='" + i.no_teams + "' name='" + i.name + "' setting='" + i.setting + "' mode='" + i.mode + "' mode_name='" + i.mode_name + "' mode_icon='" + i.mode_icon + "' description='" + i.description + "' image='" + i.image + "' difficulty='" + i.difficulty + "' type='" + i.type + "' time_of_day='" + i.time_of_day + "'>";

    if (i.objectives.length > 0) {
        get2 = "<objectives factor='" + i.objectives.factor + "'>" + getObjective(i.objectives.obj) + "</objectives>";
    }

    if (i.crownrewardsthresholds.length > 0) {
        get3 = "<CrownRewardsThresholds>" + getCrownRewardsThresholds(i.crownrewardsthresholds) + "</CrownRewardsThresholds>";
    }

    if (i.crownrewards.length > 0) {
        get4 = "<CrownRewards bronze='" + i.crownrewards.bronze + "' silver='" + i.crownrewards.silver + "' gold='" + i.crownrewards.gold + "'/>";
    }

    get5 = "</mission>";

    return get1 + get2 + get3 + get4 + get5;
}

function getMissions(client, cb) {
    _model2.default.missions.find({}, function (err, mission) {
        var list = '';
        for (var i = 0; i < mission.length; i++) {
            list += parseXMLModel(mission[i]);
        }
        cb(list);
    });
}

exports.default = function (client, stz) {
    _model2.default.auth.findOne({ username: client.jid.user }, function (err, user) {

        getMissions(client, function (missions) {

            var profile = _ltx2.default.parse("<iq to='" + stz.attrs.from + "' from='" + stz.attrs.to + "' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<missions_get_list hash='-1430220480' content_hash='-1162631100'>" + missions + "</missions_get_list>" + "</query>" + "</iq>");

            client.send(profile);
        });
    });
};
//# sourceMappingURL=missions.js.map