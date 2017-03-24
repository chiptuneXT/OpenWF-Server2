import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz) => {
	Account.auth.findOne({username: client.jid.user}, function(err, user) {
        let profile = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<get_account_profiles>"+
                        "<profile id='"+user.profileid+"' nickname='"+user.nickname+"'/>"+
                    "</get_account_profiles>"+
                "</query>"+
            "</iq>"
        )
        client.send(profile); 
	});
};