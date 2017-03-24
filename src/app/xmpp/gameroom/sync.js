import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, query) => {


    function getPlayers(obj){
    
        let array =  '';
        for (var i = 0; i < obj.length; i++) {
            if(obj[i].online_id === stz.attrs.from){
                array += "<player profile_id='"+obj[i].profile_id+"' team_id='"+obj[i].team_id+"' status='"+obj[i].status+"' observer='"+obj[i].observer+"' skill='"+obj[i].skill+"' nickname='"+obj[i].nickname+"' clanName='"+obj[i].clanName+"' class_id='"+obj[i].class_id+"' online_id='"+obj[i].online_id+"' group_id='"+obj[i].group_id+"' presence='"+obj[i].presence+"' experience='"+obj[i].experience+"' rank='"+obj[i].rank+"' banner_badge='"+obj[i].banner_badge+"' banner_mark='"+obj[i].banner_mark+"' banner_stripe='"+obj[i].banner_stripe+"' region_id='"+obj[i].region_id+"'/>";
            }else{
                array += "<player profile_id='"+obj[i].profile_id+"' team_id='"+obj[i].team_id+"' status='"+obj[i].status+"' observer='"+obj[i].observer+"' skill='"+obj[i].skill+"' nickname='"+obj[i].nickname+"' clanName='"+obj[i].clanName+"' class_id='"+obj[i].class_id+"' online_id='"+obj[i].online_id+"' group_id='"+obj[i].group_id+"' presence='"+obj[i].presence+"' experience='"+obj[i].experience+"' rank='"+obj[i].rank+"' banner_badge='"+obj[i].banner_badge+"' banner_mark='"+obj[i].banner_mark+"' banner_stripe='"+obj[i].banner_stripe+"' region_id='"+obj[i].region_id+"'/>";
            }
        }
        return array;

    }

    Account.gameroomopen.findOne({'core.players': {$elemMatch: {online_id: stz.attrs.from}}}, function(err, res) {


        let setserver = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='get'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<setserver host='gameamazing' mission_key='"+res.mission.mission_key+"' node='http://camaya.net/gloox' ver='0RyJmsC2EQAjYmYlhkMGaVEgE/8=' version='' session_id='1' cpu_usage='0' mode='pvp_pve' port='60018' status='2' build_type='--release' region_id='global' memory_usage='836' />"+
                "</query>"+
            "</iq>"
        )

        client.send(setserver)


        let setserver2 = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='get'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<setserver master_node='192.168.25.3' />"+
                "</query>"+
            "</iq>"
        )

        client.send(setserver2)
        
        let setprivatestatus = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='get'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<gameroom_sync bcast_receivers='rubens@warface/GameClient'>"+
                        "<game_room room_id='"+res.room_id+"' room_type='"+res.room_type+"'>"+
                            
                            "<core teams_switched='"+res.core.teams_switched+"' room_name='"+res.core.room_name+"' private='"+query.private+"' players='"+res.core.players+"' can_start='1' team_balanced='"+res.core.team_balanced+"' min_ready_players='"+res.core.min_ready_players+"' revision='"+res.core.revision+"'>"+
                                "<players>"+
                                    getPlayers(res.core.players)+
                                "</players>"+
                                "<playersReserved/>"+
                            "</core>"+
                            
                            "<session id='823427570887578502' status='2' game_progress='1' start_time='"+Math.floor(Date.now() / 1000)+"' revision='130'/>"+
                            
                            "<custom_params friendly_fire='0' enemy_outlines='1' auto_team_balance='0' dead_can_chat='1' join_in_the_process='1' max_players='5' round_limit='0' class_restriction='253' inventory_slot='2113929215' revision='13'/>"+
                            
                            "<mission mission_key='"+res.mission.mission_key+"' no_teams='1' name='@na_mission_path01_1' setting='africa/africa_base' mode='pve' mode_name='@PvE_game_mode_desc' mode_icon='pve_icon' description='@mission_desc_africa_path' image='mapImgAfrica_training' difficulty='easy' type='trainingmission' time_of_day='9:06' revision='13'>"+
                            "<objectives factor='1'>"+
                                "<objective id='0' type='primary'/>"+
                                "<objective id='11' type='secondary'/>"+
                                "<objective id='15' type='secondary'/>"+
                            "</objectives>"+
                            "</mission>"+

                        "</game_room>"+
                    "</gameroom_sync>"+
                "</query>"+
            "</iq>")
        client.send(setprivatestatus)

       // console.log(setprivatestatus.toString());

        let gettime = Math.floor(Date.now() / 100);

        let start_play = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='get'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<mission_update>"+
                        "<game_room room_id='"+res.room_id+"' room_type='"+res.room_type+"'>"+
                            "<session start_time='"+gettime+"' id='823427570887578502' status='2' game_progress='1' revision='367' />"+
                        "</game_room>"+
                    "</mission_update>"+
                "</query>"+
            "</iq>"
        )

        client.send(start_play)



        let session_join_xml = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='get'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    //"<session_join room_id='"+res.room_id+"' server='gameamazing' hostname='179.179.165.163' port='64203' local='0'/>"+
                    "<session_join server='gameamazing' hostname='192.168.25.3' port='60016' local='0'/>"+
                "</query>"+
            "</iq>")
        client.send(session_join_xml)


    }).sort({_id:1});
}