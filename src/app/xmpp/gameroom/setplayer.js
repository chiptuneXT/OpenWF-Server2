import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, query) => {

	// Account.profile.findOne({username: client.jid.user}, function(err, profile_db) {
	// 	let gameroom_sync = ltx.parse(
 //    		"<iq from='k01.warface' to='rubens@warface/GameClient' type='get' id='3301609612'>"+
 //                "<query xmlns='urn:cryonline:k01'>"+
 //                    "<gameroom_sync>"+
 //                        "<game_room room_id='2' room_type='1'>"+
 //                            "<core teams_switched='0' room_name='setTimeout&apos;s GAME ROOM' private='0' players='1' can_start='0' team_balanced='1' min_ready_players='3' revision='16'>"+
 //                                "<players>"+
 //                                    "<player profile_id='"+profile_db.profileid+"' team_id='1' status='1' observer='0' skill='9.000' nickname='"+profile_db.nickname+"' clanName='' class_id='0' online_id='"+profile_db.username+"@warface/GameClient' group_id='' presence='17' experience='"+profile_db.experience+"' rank='55' banner_badge='4294967295' banner_mark='4294967295' banner_stripe='4294967295' region_id='global'/>"+
 //                                "</players>"+
 //                                "<playersReserved/>"+
 //                            "</core>"+
 //                        "</game_room>"+
 //                    "</gameroom_sync>"+
 //               "</query>"+
 //            "</iq>"
 //    	)

 //        client.send(gameroom_sync)
 //    });
	

	// let setplayer = ltx.parse(
 //            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
 //                "<query xmlns='urn:cryonline:k01'>"+
 //                	"<setserver host='gameamazing' mission_key='24658104-a3c6-4235-a243-3027d828a161' node='http://camaya.net/gloox' ver='0RyJmsC2EQAjYmYlhkMGaVEgE/8=' version='1.12600.570.21500' session_id='1' cpu_usage='0' mode='pvp_pve' port='64089' status='2' build_type='--release' region_id='global' memory_usage='836' />"+
 //                "</query>"+
 //            "</iq>")
 //    client.send(setplayer)

    // let session_join_xml = ltx.parse(
    //         "<iq from='"+stz.attrs.to+"' type='get'>"+
    //             "<query xmlns='urn:cryonline:k01'>"+
    //                 "<session_join room_id='1' server='gameamazing' hostname='localhost' port='64089' local='0'/>"+
    //             "</query>"+
    //         "</iq>")
    // client.send(session_join_xml)



	Account.gameroomopen.findOne({'core.players': {$elemMatch: {online_id: stz.attrs.from}}}, function(err, res) {
  		
		//console.log(res);

		// let setprivatestatus = ltx.parse(
  //           "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
  //               "<query xmlns='urn:cryonline:k01'>"+
  //               	"<setserver host='gameamazing' mission_key='"+res.mission.mission_key+"' node='http://camaya.net/gloox' ver='0RyJmsC2EQAjYmYlhkMGaVEgE/8=' version='' session_id='1' cpu_usage='0' mode='pvp_pve' port='64203' status='2' build_type='--release' region_id='global' memory_usage='0' />"+
  //               "</query>"+
  //           "</iq>")
  //       client.send(setprivatestatus)


	}).sort({_id:1});



}