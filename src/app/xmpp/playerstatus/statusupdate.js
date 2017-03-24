import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, query) => {

    //.replace('data-','');

    
	Account.profile.findOne({username: client.jid.user}, function(err, user) {
        
        let statusupdate = ltx.parse(
            "<iq to='"+stz.attrs.to+"' from='"+stz.attrs.from+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                   "<peer_status_update nickname='"+user.nickname+"' profile_id='"+user.profileid+"' status='"+query.status+"' experience='"+user.experience+"' place_token='"+query.place_token+"' place_info_token='"+query.place_info_token+"' mode_info_token='"+query.mode_info_token+"' mission_info_token='"+query.mission_info_token+"'/>"+
                "</query>"+
            "</iq>"
        )
        client.send(statusupdate); 

	});
};