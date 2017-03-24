import Account from './account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (server, config) => {
    server.on('connect', function(client) {
        client.on('stanza', function(stz) {
            Account.auth.findOne({username: client.jid.user}, function(err, user) {
                if (stz.is('message')) {
                    let query = stz.getChild('body').children[0];
                    let message = ltx.parse(
                        "<message from='"+stz.attrs.to+"/"+user.nickname+"' to='"+stz.attrs.from+"' type='groupchat'>"+
                            "<body>"+query+"</body>"+
                        "</message>");
                    client.send(message);
                }
            });
        });
    });
};

