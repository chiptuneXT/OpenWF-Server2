import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz) => {
	Account.profile.findOne({username: client.jid.user}, function(err, user) {
        let crymoney = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<get_cry_money cry_money='"+user.cry_money+"' />"+
                "</query>"+
            "</iq>"
        )
        client.send(crymoney); 
	});
};