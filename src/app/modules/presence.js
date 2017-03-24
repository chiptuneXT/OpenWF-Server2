import Account from './account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (server, config) => {
    server.on('connect', function(client) {
        client.on('stanza', function(stz) {
            if (stz.is('presence')) {
                let presence = ltx.parse(
                    "<presence from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' xml:lang='en' />"
                )
                client.send(presence);
            }
        });
    });
};

