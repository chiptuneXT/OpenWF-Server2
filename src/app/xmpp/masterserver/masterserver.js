import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz, channel) => {
	Account.auth.findOne({username: client.jid.user}, function(err, user) {
		
        switch(channel){
            case "pve":
                    
                    let pve = ltx.parse(
                        "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' xml:lang='en' id='"+stz.attrs.id+"' type='result'>"+
                            "<query xmlns='urn:cryonline:k01'>"+
                                "<get_master_server resource='main_pve_6'  load_index='244'/>"+
                            "</query>"+
                        "</iq>")
                    client.send(pve);

                break;
            case "pvp_pro":

                    let pvp_pro = ltx.parse(
                        "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' xml:lang='en' id='"+stz.attrs.id+"' type='result'>"+
                            "<query xmlns='urn:cryonline:k01'>"+
                                "<get_master_server resource='main_pvp_pro_2'  load_index='255'/>"+
                            "</query>"+
                        "</iq>")
                    client.send(pvp_pro);

                break;
            case "pvp_newbie":

                    let pvp_newbie = ltx.parse(
                        "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' xml:lang='en' id='"+stz.attrs.id+"' type='result'>"+
                            "<query xmlns='urn:cryonline:k01'>"+
                                "<get_master_server resource='main_pvp_newbie_2'  load_index='255'/>"+
                            "</query>"+
                        "</iq>")
                    client.send(pvp_newbie);

                break;
        }

	});
};