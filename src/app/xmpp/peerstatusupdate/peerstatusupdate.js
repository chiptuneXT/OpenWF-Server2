import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, query) => {
	//Account.profile.findOne({username: client.jid.user}, function(err, user) {
    
    let peer_status = ltx.parse(
		"<iq to='"+stz.attrs.to+"' from='"+stz.attrs.from+"' id='"+stz.attrs.id+"' type='result'>"+
		    "<query xmlns='urn:cryonline:k01'>"+
		        "<peer_status_update nickname='"+query.nickname+"' profile_id='"+query.profile_id+"' status='"+query.status+"' experience='"+query.experience+"' place_token='"+query.place_token+"' place_info_token='"+query.place_info_token+"' mode_info_token='"+query.mode_info_token+"' mission_info_token='"+query.mission_info_token+"'/>"+
		    "</query>"+
		"</iq>"
	)
	client.send(peer_status); 

	//});
};