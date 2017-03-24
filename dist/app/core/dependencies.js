'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ltx = require('ltx');

var _ltx2 = _interopRequireDefault(_ltx);

var _account = require('../xmpp/account/account');

var _account2 = _interopRequireDefault(_account);

var _friends = require('../xmpp/account/friends');

var _friends2 = _interopRequireDefault(_friends);

var _masterserver = require('../xmpp/masterserver/masterserver');

var _masterserver2 = _interopRequireDefault(_masterserver);

var _masterservers = require('../xmpp/masterserver/masterservers');

var _masterservers2 = _interopRequireDefault(_masterservers);

var _profile = require('../xmpp/profile/profile');

var _profile2 = _interopRequireDefault(_profile);

var _items = require('../xmpp/items/items');

var _items2 = _interopRequireDefault(_items);

var _joinchannel = require('../xmpp/joinchannel/joinchannel');

var _joinchannel2 = _interopRequireDefault(_joinchannel);

var _settings = require('../xmpp/settings/settings');

var _settings2 = _interopRequireDefault(_settings);

var _shop = require('../xmpp/shop/shop');

var _shop2 = _interopRequireDefault(_shop);

var _shop_buy_offer = require('../xmpp/shop/shop_buy_offer');

var _shop_buy_offer2 = _interopRequireDefault(_shop_buy_offer);

var _configs = require('../xmpp/configs/configs');

var _configs2 = _interopRequireDefault(_configs);

var _switchchannel = require('../xmpp/switchchannel/switchchannel');

var _switchchannel2 = _interopRequireDefault(_switchchannel);

var _missions = require('../xmpp/missions/missions');

var _missions2 = _interopRequireDefault(_missions);

var _clans = require('../xmpp/clans/clans');

var _clans2 = _interopRequireDefault(_clans);

var _gameroomopen = require('../xmpp/gameroom/gameroomopen');

var _gameroomopen2 = _interopRequireDefault(_gameroomopen);

var _setplayer = require('../xmpp/gameroom/setplayer');

var _setplayer2 = _interopRequireDefault(_setplayer);

var _setprivatestatus = require('../xmpp/gameroom/setprivatestatus');

var _setprivatestatus2 = _interopRequireDefault(_setprivatestatus);

var _statusupdate = require('../xmpp/playerstatus/statusupdate');

var _statusupdate2 = _interopRequireDefault(_statusupdate);

var _sync = require('../xmpp/gameroom/sync');

var _sync2 = _interopRequireDefault(_sync);

var _crymoney = require('../xmpp/crymoney/crymoney');

var _crymoney2 = _interopRequireDefault(_crymoney);

var _playerstats = require('../xmpp/playerstats/playerstats');

var _playerstats2 = _interopRequireDefault(_playerstats);

var _playerstatus = require('../xmpp/playerstatus/playerstatus');

var _playerstatus2 = _interopRequireDefault(_playerstatus);

var _contracts = require('../xmpp/contracts/contracts');

var _contracts2 = _interopRequireDefault(_contracts);

var _profileperformance = require('../xmpp/profileperformance/profileperformance');

var _profileperformance2 = _interopRequireDefault(_profileperformance);

var _seendate = require('../xmpp/seendate/seendate');

var _seendate2 = _interopRequireDefault(_seendate);

var _message = require('../xmpp/message/message');

var _message2 = _interopRequireDefault(_message);

var _invitation = require('../xmpp/invitation/invitation');

var _invitation2 = _interopRequireDefault(_invitation);

var _achievements = require('../xmpp/achievements/achievements');

var _achievements2 = _interopRequireDefault(_achievements);

var _lobbychat = require('../xmpp/lobbychat/lobbychat');

var _lobbychat2 = _interopRequireDefault(_lobbychat);

var _quickplaymaplist = require('../xmpp/quickplaymaplist/quickplaymaplist');

var _quickplaymaplist2 = _interopRequireDefault(_quickplaymaplist);

var _expireditems = require('../xmpp/expireditems/expireditems');

var _expireditems2 = _interopRequireDefault(_expireditems);

var _peerstatusupdate = require('../xmpp/peerstatusupdate/peerstatusupdate');

var _peerstatusupdate2 = _interopRequireDefault(_peerstatusupdate);

var _setcharacter = require('../xmpp/setcharacter/setcharacter');

var _setcharacter2 = _interopRequireDefault(_setcharacter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ResyncProfile from '../xmpp/resyncprofile/resyncprofile';

exports.default = function (server, config) {
    server.on('connect', function (client) {
        client.on('stanza', function (stz) {

            if (stz.is('iq')) {
                if (stz.attrs.type === "get" && stz.getChild('query', "urn:cryonline:k01")) {

                    var query = stz.getChild('query', "urn:cryonline:k01").children[0];

                    switch (query.name) {

                        case 'account':
                            (0, _account2.default)(client, stz);
                            (0, _friends2.default)(client, stz);
                            break;
                        case 'get_account_profiles':
                            (0, _profile2.default)(client, stz);
                            break;
                        case 'items':
                            (0, _items2.default)(client, stz);
                            break;
                        case 'join_channel':
                            (0, _joinchannel2.default)(client, stz, query.attrs);
                            break;
                        case 'persistent_settings_get':
                            (0, _settings2.default)(client, stz);
                            break;
                        case 'get_master_server':
                            (0, _masterserver2.default)(client, stz, query.attrs.channel);
                            break;
                        case 'shop_get_offers':
                            (0, _shop2.default)(client, stz);
                            break;
                        case 'shop_buy_offer':
                            (0, _shop_buy_offer2.default)(client, stz, query.attrs);
                            break;
                        case 'get_configs':
                            (0, _configs2.default)(client, stz);
                            break;
                        case 'switch_channel':
                            (0, _switchchannel2.default)(client, stz, query.attrs);
                            break;
                        case 'missions_get_list':
                            (0, _missions2.default)(client, stz);
                            break;
                        case 'clan_list':
                            (0, _clans2.default)(client, stz);
                            break;
                        case 'get_cry_money':
                            (0, _crymoney2.default)(client, stz);
                            break;
                        case 'get_player_stats':
                            (0, _playerstats2.default)(client, stz);
                            break;
                        case 'player_status':
                            (0, _playerstatus2.default)(client, stz, query.attrs);
                            break;
                        case 'peer_status_update':
                            (0, _statusupdate2.default)(client, stz, query.attrs);
                            break;
                        case 'get_contracts':
                            (0, _contracts2.default)(client, stz);
                            break;
                        case 'get_profile_performance':
                            (0, _profileperformance2.default)(client, stz);
                            break;
                        case 'get_master_servers':
                            (0, _masterservers2.default)(client, stz);
                            break;
                        case 'message':
                            (0, _message2.default)(client, stz, query.attrs);
                            break;
                        case 'get_last_seen_date':
                            (0, _seendate2.default)(client, stz, query.attrs);
                            break;
                        case 'send_invitation':
                            //Invitation(client, stz, query.attrs);
                            break;
                        case 'get_achievements':
                            (0, _achievements2.default)(client, stz);
                            break;
                        case 'lobbychat_getchannelid':
                            (0, _lobbychat2.default)(client, stz);
                            break;
                        case 'quickplay_maplist':
                            (0, _quickplaymaplist2.default)(client, stz);
                            break;
                        case 'peer_status_update':
                            (0, _peerstatusupdate2.default)(client, stz, query.attrs);
                            break;
                        // case 'gameroom_setplayer':

                        //     break;
                        case 'gameroom_setprivatestatus':
                            (0, _setprivatestatus2.default)(client, stz, query.attrs);
                            break;
                        case 'gameroom_setplayer':
                            (0, _setplayer2.default)(client, stz, query.attrs);
                            (0, _sync2.default)(client, stz, query.attrs);
                            break;
                        case 'gameroom_open':
                            (0, _gameroomopen2.default)(client, stz, query.attrs);
                            break;
                        case 'get_expired_items':
                            (0, _expireditems2.default)(client, stz);
                            break;
                        case 'setcharacter':
                            (0, _setcharacter2.default)(client, stz, query.attrs);
                            break;
                        case 'get_storage_items':
                            client.send(stz);
                            break;
                        case 'resync_profile':
                            client.send(stz);
                            break;
                        default:
                            var from = stz.attrs.from;
                            stz.attrs.from = stz.attrs.to;
                            stz.attrs.to = from;
                            client.send(stz);
                            //console.log('Query não configurada ------------------ ');
                            //console.log(stz.toString(), '\n');
                            break;
                    }
                }
            }

            console.log(stz.toString(), '\n');
        });
    });
};
//# sourceMappingURL=dependencies.js.map