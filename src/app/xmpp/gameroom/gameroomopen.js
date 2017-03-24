import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

function guidGenerator() {
    let S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+""+S4()+""+S4()+""+S4()+""+S4()+S4()+S4());
}

function getPlayers(obj){
    
    let array =  '';
    for (var i = 0; i < obj.length; i++) {
        array += "<player profile_id='"+obj[i].profile_id+"' team_id='"+obj[i].team_id+"' status='"+obj[i].status+"' observer='"+obj[i].observer+"' skill='"+obj[i].skill+"' nickname='"+obj[i].nickname+"' clanName='"+obj[i].clanName+"' class_id='"+obj[i].class_id+"' online_id='"+obj[i].online_id+"' group_id='"+obj[i].group_id+"' presence='"+obj[i].presence+"' experience='"+obj[i].experience+"' rank='"+obj[i].rank+"' banner_badge='"+obj[i].banner_badge+"' banner_mark='"+obj[i].banner_mark+"' banner_stripe='"+obj[i].banner_stripe+"' region_id='"+obj[i].region_id+"'/>";
    }
    return array;

}

function getTeamColors(obj){
    
    let array =  '';
    for (var i = 0; i < obj.length; i++) {
        array += "<team_color id='"+obj[i].id+"' color='"+obj[i].color+"'/>";
    }
    return array;

}

function getObjective(obj){
    let list = '';
    for (var i = 0; i < obj.length; i++) {
        list += "<objective id='"+obj[i].id+"' type='"+obj[i].type+"'/>";
    }
    return list;
}

function getCrownRewardsThresholds(obj){
    let list = '';
    if(obj['totalperformance']){
        list += "<TotalPerformance bronze='"+obj['totalperformance'].bronze+"' silver='"+obj['totalperformance'].silver+"' gold='"+obj['totalperformance'].gold+"'/>";
    }else if(obj['time']){
        list += "<Time bronze='"+obj['time'].bronze+"' silver='"+obj['time'].silver+"' gold='"+obj['time'].gold+"'/>";
    }
    return list;
}

function parseXMLModel(i){
    
    var get1,
        get2 = "",
        get3 = "",
        get4 = "",
        get5;

    get1 = "<mission mission_key='"+i.mission_key+"' no_teams='"+i.no_teams+"' name='"+i.name+"' setting='"+i.setting+"' mode='"+i.mode+"' mode_name='"+i.mode_name+"' mode_icon='"+i.mode_icon+"' description='"+i.description+"' image='"+i.image+"' difficulty='"+i.difficulty+"' type='"+i.type+"' time_of_day='"+i.time_of_day+"'>";
    
        if(i.objectives.length > 0){
           get2 = "<objectives factor='"+i.objectives.factor+"'>"+getObjective(i.objectives.obj)+"</objectives>";
        }

        if(i.crownrewardsthresholds.length > 0){
            get3 = "<CrownRewardsThresholds>"+getCrownRewardsThresholds(i.crownrewardsthresholds)+"</CrownRewardsThresholds>";
        }

        if(i.crownrewards.length > 0){
            get4 = "<CrownRewards bronze='"+i.crownrewards.bronze+"' silver='"+i.crownrewards.silver+"' gold='"+i.crownrewards.gold+"'/>";
        }

    get5 = "</mission>";

    return get1 + get2 + get3 + get4 + get5;

}

function getMission(key, cb){
    Account.missions.findOne({mission_key: key}, function(err, mission) {
        cb(parseXMLModel(mission));
    });
}

export default (client, stz, query) => {
    Account.profile.findOne({username: client.jid.user}, function(err, user) {

        let GameRoom = new Account.gameroomopen({
            room_id: guidGenerator(),
            room_type: query.room_type,
            jid_created: client.jid.user+'@warface/GameClient',
            core: {
                teams_switched: '0',
                room_name: query.room_name,
                private: query.private,
                players: '1',
                can_start: '0',
                team_balanced: query.auto_team_balance,
                min_ready_players: query.max_players,
                revision: '2',
                players: [
                    {
                        profile_id: user.profileid,
                        team_id: query.team_id,
                        status: query.status,
                        observer: '0',
                        skill: '0',
                        nickname: user.nickname,
                        clanName: 'Privado',
                        class_id: query.class_id,
                        online_id: client.jid.user+'@warface/GameClient',
                        group_id: query.group_id,
                        presence: '17',
                        experience: user.experience,
                        rank: '55',
                        banner_badge: user.banner_badge,
                        banner_mark: user.banner_mark,
                        banner_stripe: user.banner_stripe,
                        region_id: 'global'
                }],
                team_colors: [
                    {id: '1', color: '4294907157'},
                    {id: '2', color: '4279655162'}
                ]
            },
            session: {
                id: '',
                status: query.status,
                game_progress: '0',
                start_time: '18446744011573962016',
                revision:  '2'
            },
            custom_params: {
                friendly_fire: query.friendly_fire,
                enemy_outlines: query.enemy_outlines,
                auto_team_balance: query.auto_team_balance,
                dead_can_chat: '1',
                join_in_the_process: '1',
                max_players: query.max_players,
                round_limit: query.round_limit,
                class_restriction: '253',
                inventory_slot: query.inventory_slot,
                revision: '2'
            },
            mission:{
                mission_key: query.mission,
            },
            kick_vote_params: {
                success: '0.8',
                timeout: '60',
                cooldown: '300',
                revision: '1'
            },
            room_master: {
                master: user.profileid,
                revision: '2'
            }
        });

        GameRoom.save(function(err) {
            
            getMission(GameRoom.mission.mission_key, function(mission_pl) {

                let gameroomopen = ltx.parse(
                    
                    "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                        "<query xmlns='urn:cryonline:k01'>"+
                            "<gameroom_open>"+
                                "<game_room room_id='"+GameRoom.room_id+"' room_type='"+GameRoom.room_type+"'>"+
            
                                    "<core teams_switched='"+GameRoom.core.teams_switched+"' room_name='"+GameRoom.core.room_name+"' private='"+GameRoom.core.private+"' players='"+GameRoom.core.players+"' can_start='"+GameRoom.core.can_start+"' team_balanced='"+GameRoom.core.team_balanced+"' min_ready_players='"+GameRoom.core.min_ready_players+"' revision='"+GameRoom.core.revision+"'>"+
                                        
                                        "<players>"+
                                           getPlayers(GameRoom.core.players)+
                                        "</players>"+

                                        "<playersReserved/>"+
                                        
                                        "<team_colors>"+
                                            getTeamColors(GameRoom.core.team_colors)+
                                        "</team_colors>"+

                                    "</core>"+


                                    "<session id='"+GameRoom.session.id+"' status='"+GameRoom.session.status+"' game_progress='"+GameRoom.session.game_progress+"' start_time='"+GameRoom.session.start_time+"' revision='"+GameRoom.session.revision+"'/>"+
                                    
                                    "<custom_params friendly_fire='"+GameRoom.custom_params.friendly_fire+"' enemy_outlines='"+GameRoom.custom_params.enemy_outlines+"' auto_team_balance='"+GameRoom.custom_params.auto_team_balance+"' dead_can_chat='"+GameRoom.custom_params.dead_can_chat+"' join_in_the_process='"+GameRoom.custom_params.join_in_the_process+"' max_players='"+GameRoom.custom_params.max_players+"' round_limit='"+GameRoom.custom_params.round_limit+"' class_restriction='"+GameRoom.custom_params.class_restriction+"' inventory_slot='"+GameRoom.custom_params.inventory_slot+"' revision='"+GameRoom.custom_params.revision+"'/>"+
                                    
                                    mission_pl+

                                    "<kick_vote_params success='"+GameRoom.kick_vote_params.success+"' timeout='"+GameRoom.kick_vote_params.timeout+"' cooldown='"+GameRoom.kick_vote_params.cooldown+"' revision='"+GameRoom.kick_vote_params.revision+"'/>"+
                                    "<room_master master='"+GameRoom.room_master.master+"' revision='"+GameRoom.room_master.revision+"'/>"+

                                "</game_room>"+
                            "</gameroom_open>"+
                        "</query>"+
                    "</iq>")

                client.send(gameroomopen)
           
            });

        });

    });
    
};