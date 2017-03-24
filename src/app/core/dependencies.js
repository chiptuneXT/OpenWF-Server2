import ltx from 'ltx';
import Account from '../xmpp/account/account';
import Friends from '../xmpp/account/friends';
import MasterServer from '../xmpp/masterserver/masterserver';
import MasterServers from '../xmpp/masterserver/masterservers';
import Profile from '../xmpp/profile/profile';
import Items from '../xmpp/items/items';
import JoinChannel from '../xmpp/joinchannel/joinchannel';
import Settings from '../xmpp/settings/settings';
import Shop from '../xmpp/shop/shop';
import ShopBuyOffer from '../xmpp/shop/shop_buy_offer';
import Configs from '../xmpp/configs/configs';
import SwitchChannel from '../xmpp/switchchannel/switchchannel';
import Missions from '../xmpp/missions/missions';
import Clans from '../xmpp/clans/clans';
import GameroomOpen from '../xmpp/gameroom/gameroomopen';
import SetPlayer from '../xmpp/gameroom/setplayer';
import SetPrivateStatus from '../xmpp/gameroom/setprivatestatus';
import StatusUpdate from '../xmpp/playerstatus/statusupdate';
import Sync from '../xmpp/gameroom/sync';
import CryMoney from '../xmpp/crymoney/crymoney';
import PlayerStats from '../xmpp/playerstats/playerstats';
import PlayerStatus from '../xmpp/playerstatus/playerstatus';
import Contracts from '../xmpp/contracts/contracts';
import ProfilePerformance from '../xmpp/profileperformance/profileperformance';
import SeenDate from '../xmpp/seendate/seendate';
import Message from '../xmpp/message/message';
import Invitation from '../xmpp/invitation/invitation';
import Achievements from '../xmpp/achievements/achievements';
import Lobbychat from '../xmpp/lobbychat/lobbychat';
import QuickplayMaplist from '../xmpp/quickplaymaplist/quickplaymaplist';
import ExpiredItems from '../xmpp/expireditems/expireditems';
import PeerStatusUpdate from '../xmpp/peerstatusupdate/peerstatusupdate';
import SetCharacter from '../xmpp/setcharacter/setcharacter';
// import ResyncProfile from '../xmpp/resyncprofile/resyncprofile';
 
export default (server, config) => {
	server.on('connect', function(client) {
        client.on('stanza', function(stz) {

        	if (stz.is('iq')) {
        		if(stz.attrs.type === "get" && stz.getChild('query', "urn:cryonline:k01")){
        			
        			const query = stz.getChild('query', "urn:cryonline:k01").children[0];

        			switch(query.name){
                        
                        case 'account':
                        	Account(client, stz);
                            Friends(client, stz);
                        	break;
                        case 'get_account_profiles':
                            Profile(client, stz);
                            break;
                        case 'items':
                            Items(client, stz);
                            break;
                        case 'join_channel':
                            JoinChannel(client, stz, query.attrs);
                            break;
                        case 'persistent_settings_get':
                        	Settings(client, stz);
                        	break;
                        case 'get_master_server':
                        	MasterServer(client, stz, query.attrs.channel);
                        	break;
                        case 'shop_get_offers':
                        	Shop(client, stz);
                        	break;
                        case 'shop_buy_offer':
                            ShopBuyOffer(client, stz, query.attrs);
                            break;
                        case 'get_configs':
                        	Configs(client, stz);
                        	break;
                        case 'switch_channel':
                            SwitchChannel(client, stz, query.attrs);
                            break;
                        case 'missions_get_list':
                            Missions(client, stz);
                            break;
                        case 'clan_list':
                            Clans(client, stz);
                            break;
                        case 'get_cry_money':
                            CryMoney(client, stz);
                            break;
                        case 'get_player_stats':
                            PlayerStats(client, stz);
                            break;
                        case 'player_status':
                            PlayerStatus(client, stz, query.attrs);
                            break;
                        case 'peer_status_update':
                            StatusUpdate(client, stz, query.attrs);
                            break;
                        case 'get_contracts':
                            Contracts(client, stz);
                            break;
                        case 'get_profile_performance':
                            ProfilePerformance(client, stz);
                            break;
                        case 'get_master_servers':
                            MasterServers(client, stz);
                            break;
                        case 'message':
                            Message(client, stz, query.attrs);
                            break;
                        case 'get_last_seen_date':
                            SeenDate(client, stz, query.attrs);
                            break;
                        case 'send_invitation':
                            //Invitation(client, stz, query.attrs);
                            break;
                        case 'get_achievements':
                            Achievements(client, stz);
                            break;
                        case 'lobbychat_getchannelid':
                            Lobbychat(client, stz);
                            break;
                        case 'quickplay_maplist':
                            QuickplayMaplist(client, stz);
                            break;
                        case 'peer_status_update':
                            PeerStatusUpdate(client, stz, query.attrs);
                            break;
                        // case 'gameroom_setplayer':
                            
                        //     break;
                        case 'gameroom_setprivatestatus':
                            SetPrivateStatus(client, stz, query.attrs);
                            break;
                        case 'gameroom_setplayer':
                            SetPlayer(client, stz, query.attrs);
                            Sync(client, stz, query.attrs);
                            break;
                        case 'gameroom_open':
                            GameroomOpen(client, stz, query.attrs);
                            break;
                        case 'get_expired_items':
                            ExpiredItems(client, stz);
                            break;
                        case 'setcharacter':
                            SetCharacter(client, stz, query.attrs);
                            break;
                        case 'get_storage_items':
                            client.send(stz)
                            break;
                        case 'resync_profile':
                            client.send(stz)
                            break;
                        default:
                            let from = stz.attrs.from
                            stz.attrs.from = stz.attrs.to
                            stz.attrs.to = from
                            client.send(stz)
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