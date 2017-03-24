import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, query) => {
	Account.profile.findOne({username: client.jid.user}, function(err, user) {
        let message = ltx.parse(
            "<iq from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<message from='"+user.nickname+"' nick='"+query.nick+"' message='"+query.message+"'/>"+
                "</query>"+
            "</iq>"
        )
        client.send(message);
	});
};