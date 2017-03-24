import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz) => {
	Account.auth.findOne({username: client.jid.user}, function(err, user) {
        let contracts = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<get_contracts>"+
                        "<contract profile_id='"+user.profileid+"' rotation_id='3' contract_name='' current='0' total='0' rotation_time='473.452889' status='0' is_available='0'/>"+
                    "</get_contracts>"+
                "</query>"+
            "</iq>"
        )
        client.send(contracts); 
	});
};