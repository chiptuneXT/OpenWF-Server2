import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, query) => {
	Account.profile.findOne({username: client.jid.user}, function(err, user) {
        let switchchannel = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<switch_channel>"+
                        "<character nick='"+user.nickname+"' gender='"+user.gender+"' height='"+user.height+"' fatness='0' head='"+user.head+"' current_class='"+user.current_class+"' experience='"+user.experience+"' pvp_rating_points='"+user.pvp_rating_points+"' banner_badge='"+user.banner_badge+"' banner_mark='"+user.banner_mark+"' banner_stripe='"+user.banner_stripe+"' game_money='"+user.game_money+"' cry_money='"+user.cry_money+"' crown_money='"+user.crown_money+"'>"+
                            
                            // Global chat
                            "<chat_channels>"+
                                "<chat channel='0' channel_id='"+query.region_id+"."+query.resource+"' service_id='conference.warface'/>"+
                            "</chat_channels>"+

                            "<profile_progression_state profile_id='"+user.profileid+"' mission_unlocked='none,trainingmission,all' tutorial_unlocked='7' tutorial_passed='7' class_unlocked='29' />"+

                        "</character>"+
                    "</switch_channel>"+
                "</query>"+
            "</iq>"
        )
        client.send(switchchannel); 
	});
};