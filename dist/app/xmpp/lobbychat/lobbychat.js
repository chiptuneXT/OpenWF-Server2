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
  // Account.auth.findOne({username: client.jid.user}, function(err, user) {
  //        let lobbychat = ltx.parse(
  //            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
  //                "<query xmlns='urn:cryonline:k01'>"+
  //                    "<lobbychat_getchannelid channel='3' channel_id='clan.1' service_id='conference.warface'/>"+
  //                "</query>"+
  //            "</iq>"
  //        )
  //        client.send(lobbychat); 
  // });
};
//# sourceMappingURL=lobbychat.js.map