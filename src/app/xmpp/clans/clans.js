import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz) => {
	Account.auth.findOne({username: client.jid.user}, function(err, user) {
        let clans = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<clan_list>"+
                        "<clan_performance position='0'>"+
                            "<clan name='Privado' clan_id='1' creation_date='1463967639' master='Rubens' clan_points='0' members='1' master_badge='4294967295' master_stripe='4294967295' master_mark='528'/>"+
                        "</clan_performance>"+
                    "</clan_list>"+
                "</query>"+
            "</iq>"
        )
        client.send(clans); 
	});
};