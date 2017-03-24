import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz) => {
	// Account.auth.findOne({username: client.jid.user}, function(err, user) {
 //        let lobbychat = ltx.parse(
 //            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
 //                "<query xmlns='urn:cryonline:k01'>"+
 //                    "<lobbychat_getchannelid channel='3' channel_id='clan.1' service_id='conference.warface'/>"+
 //                "</query>"+
 //            "</iq>"
 //        )
 //        client.send(lobbychat); 
	// });
};