import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, query) => {
	Account.profile.findOne({username: client.jid.user}, function(err, user) {
        
        let playerstatus = ltx.parse(
            "<iq to='"+stz.attrs.to+"' from='"+stz.attrs.from+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<player_status prev_status='"+query.prev_status+"' new_status='"+query.new_status+"' to='"+query.to+"'/>"+
                "</query>"+
            "</iq>"
        )
        client.send(playerstatus); 

	});
};