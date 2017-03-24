import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, query) => {
	Account.profile.findOne({username: client.jid.user}, function(err, user) {

        let setcharacter = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                	"<setcharacter>"+
                		
                	"</setcharacter>"+
				"</query>"+
            "</iq>"
        )
        client.send(setcharacter); 

	});
};