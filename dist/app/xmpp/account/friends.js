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

var arrayFriends = [];

function parseXML(fri) {
  var friendsList = '';
  for (var i = 0; i < fri.length; i++) {
    if (fri[i]) {
      if (fri[i].all[0].profile) {
        friendsList += "<friend jid='" + fri[i].all[1].user.username + "@warface/GameClient' profile_id='" + fri[i].all[0].profile.profileid + "' nickname='" + fri[i].all[0].profile.nickname + "' status='0' experience='" + fri[i].all[0].profile.experience + "' location=''/>";
      }
    }
  }
  return friendsList;
}

function getFriend(id, cb) {
  _model2.default.friends.find({ my_profile_id: id }, function (err, fri) {
    var _loop = function _loop(i) {
      _model2.default.profile.findOne({ profileid: fri[i].to_profile_id }, function (err, profile) {
        _model2.default.auth.findOne({ profileid: fri[i].to_profile_id }, function (err, user) {
          if (user || profile !== null) {
            arrayFriends.push({ all: [{ profile: profile }, { user: user }] });
          }
        });
      });
    };

    for (var i = 0; i < fri.length; i++) {
      _loop(i);
    }

    setTimeout(function () {
      cb(parseXML(arrayFriends));
    }, 200);
  });
}

exports.default = function (client, stz) {
  _model2.default.profile.findOne({ username: client.jid.user }, function (err, user) {
    getFriend(user.profileid, function (friends_list) {

      var friends = _ltx2.default.parse("<iq from='" + stz.attrs.to + "' to='" + stz.attrs.from + "' id='" + stz.attrs.id + "' type='get'>" + "<query xmlns='urn:cryonline:k01'>" + "<friend_list>" + friends_list + "</friend_list>" + "</query>" + "</iq>");
      client.send(friends);
      arrayFriends = [];
    });
  });
};
//# sourceMappingURL=friends.js.map