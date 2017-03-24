import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz) => {
	Account.auth.findOne({username: client.jid.user}, function(err, user) {
        let stats = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<get_player_stats>"+
                        "<stat stat='player_online_time' Value='786260'/>"+
                        "<stat stat='player_gained_money' Value='23677'/>"+
                        "<stat stat='player_max_session_time' Value='11680'/>"+
                        "<stat stat='player_damage' Value='197428'/>"+
                        "<stat stat='player_max_damage' Value='1650'/>"+
                        "<stat stat='player_ammo_restored' Value='17'/>"+
                        "<stat difficulty='' mode='PVP' stat='player_sessions_lost' Value='9'/>"+
                        "<stat mode='PVP' stat='player_sessions_left' Value='14'/>"+
                        "<stat mode='PVP' stat='player_kill_streak' Value='12'/>"+
                        "<stat mode='PVP' stat='player_kills_player' Value='503'/>"+
                        "<stat mode='PVP' stat='player_deaths' Value='337'/>"+
                        "<stat class='Rifleman' mode='PVP' stat='player_shots' Value='6517'/>"+
                        "<stat class='Rifleman' mode='PVP' stat='player_hits' Value='867'/>"+
                        "<stat class='Rifleman' mode='PVP' stat='player_headshots' Value='158'/>"+
                        "<stat class='Rifleman' mode='PVP' stat='player_playtime' Value='50514'/>"+
                        "<stat difficulty='trainingmission' mode='PVE' stat='player_sessions_won' Value='2'/>"+
                        "<stat mode='PVE' stat='player_sessions_left' Value='4'/>"+
                        "<stat mode='PVE' stat='player_kill_streak' Value='37'/>"+
                        "<stat mode='PVE' stat='player_kills_ai' Value='131'/>"+
                        "<stat class='Recon' mode='PVE' stat='player_shots' Value='1220'/>"+
                        "<stat class='Recon' mode='PVE' stat='player_hits' Value='384'/>"+
                        "<stat class='Recon' mode='PVE' stat='player_playtime' Value='21211'/>"+
                        "<stat stat='player_climb_assists' Value='14'/>"+
                        "<stat difficulty='' mode='PVP' stat='player_sessions_won' Value='13'/>"+
                        "<stat class='Recon' mode='PVP' stat='player_shots' Value='1408'/>"+
                        "<stat class='Recon' mode='PVP' stat='player_hits' Value='318'/>"+
                        "<stat class='Recon' mode='PVP' stat='player_headshots' Value='46'/>"+
                        "<stat class='Recon' mode='PVP' stat='player_playtime' Value='55817'/>"+
                        "<stat class='Engineer' mode='PVP' stat='player_shots' Value='2627'/>"+
                        "<stat class='Engineer' mode='PVP' stat='player_hits' Value='404'/>"+
                        "<stat class='Engineer' mode='PVP' stat='player_headshots' Value='54'/>"+
                        "<stat class='Engineer' mode='PVP' stat='player_playtime' Value='25467'/>"+
                        "<stat stat='player_repair' Value='1211'/>"+
                        "<stat mode='PVP' stat='player_kills_claymore' Value='11'/>"+
                        "<stat mode='PVP' stat='player_sessions_lost_connection' Value='11'/>"+
                        "<stat stat='player_heal' Value='14'/>"+
                        "<stat class='Medic' mode='PVP' stat='player_shots' Value='233'/>"+
                        "<stat class='Medic' mode='PVP' stat='player_hits' Value='27'/>"+
                        "<stat class='Medic' mode='PVP' stat='player_headshots' Value='1'/>"+
                        "<stat class='Medic' mode='PVP' stat='player_playtime' Value='1035'/>"+
                        "<stat stat='player_climb_coops' Value='5'/>"+
                        "<stat mode='PVE' stat='player_sessions_lost_connection' Value='2'/>"+
                        "<stat class='Engineer' mode='PVE' stat='player_shots' Value='275'/>"+
                        "<stat class='Engineer' mode='PVE' stat='player_hits' Value='79'/>"+
                        "<stat class='Engineer' mode='PVE' stat='player_headshots' Value='11'/>"+
                        "<stat class='Engineer' mode='PVE' stat='player_playtime' Value='3384'/>"+
                        "<stat difficulty='easymission' mode='PVE' stat='player_sessions_won' Value='1'/>"+
                        "<stat mode='PVE' stat='player_kills_claymore' Value='9'/>"+
                        "<stat class='Recon' mode='PVE' stat='player_headshots' Value='83'/>"+
                        "<stat stat='player_resurrected_by_coin' Value='48'/>"+
                        "<stat difficulty='normalmission' mode='PVE' stat='player_sessions_won' Value='1'/>"+
                        "<stat mode='PVE' stat='player_kills_melee' Value='8'/>"+
                        "<stat mode='PVE' stat='player_kills_player' Value='37'/>"+
                        "<stat mode='PVE' stat='player_kills_player_friendly' Value='37'/>"+
                        "<stat mode='PVE' stat='player_deaths' Value='53'/>"+
                        "<stat difficulty='hardmission' mode='PVE' stat='player_sessions_won' Value='1'/>"+
                        "<stat class='Rifleman' mode='PVE' stat='player_shots' Value='78'/>"+
                        "<stat class='Rifleman' mode='PVE' stat='player_playtime' Value='2587'/>"+
                        "<stat stat='player_resurrected_by_medic' Value='1'/>"+
                        "<stat difficulty='' mode='PVP' stat='player_sessions_draw' Value='1'/>"+
                        "<stat mode='PVP' stat='player_kills_melee' Value='1'/>"+
                        "<stat class='Rifleman' item_type='ar12_gold01_shop' stat='player_wpn_usage' Value='32110'/>"+
                        "<stat class='Recon' item_type='pt14_shop' stat='player_wpn_usage' Value='28567'/>"+
                        "<stat class='Engineer' item_type='smg25_shop' stat='player_wpn_usage' Value='16123'/>"+
                        "<stat class='Medic' item_type='shg07_shop' stat='player_wpn_usage' Value='590'/>"+
                    "</get_player_stats>"+
                "</query>"+
            "</iq>"
        )
        client.send(stats); 
	});
};