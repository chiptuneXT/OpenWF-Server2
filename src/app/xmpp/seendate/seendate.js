import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, query) => {
	Account.profile.findOne({username: client.jid.user}, function(err, user) {
        let profile = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='get'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<get_last_seen_date profile_id='"+query.profile_id+"' last_seen='1467033431'/>"+
                "</query>"+
            "</iq>"
        )
        client.send(profile); 
	});
};