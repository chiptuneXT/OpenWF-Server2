import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, query) => {
	Account.auth.findOne({username: client.jid.user}, function(err, user) {
        let profile = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<invitation_result result='17' user='rodrigoza1' is_follow='0' user_id='26430'/>"+
                "</query>"+
            "</iq>"
        )
        client.send(profile); 
	});
};