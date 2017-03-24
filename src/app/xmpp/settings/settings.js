import Account from '../../modules/account/model';
import ltx from 'ltx';

export default (client, stz) => {
	Account.auth.findOne({username: client.jid.user}, function(err, user) {
        let settings = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<persistent_settings_get hash='' />"+
                "</query>"+
            "</iq>"
        )
        client.send(settings); 
	});
};