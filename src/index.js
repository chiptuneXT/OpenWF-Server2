import xmpp from 'node-xmpp-server';
import ltx from 'ltx';
import path from 'path';
import morgan from 'morgan';
import initializeDb from './app/core/db';
import initializeDependencies from './app/core/dependencies';
import config from './app/core/config.json';
import Account from './app/modules/account/model';
import Messages from './app/modules/messages';
import Presence from './app/modules/presence';

initializeDb( db => {

	const server = new xmpp.C2SServer({
    port: 5222,
    domain: 'warface',
    tls: {
      keyPath: __dirname+'/app/tls/warface.key',
      certPath: __dirname+'/app/tls/warface.crt'
    }
  });

  initializeDependencies(server, config);

  // Modules XMPP
  Messages(server, config);
  Presence(server, config);

  server.on("connect", function(client) {

    client.on("authenticate", function(opts, cb) {
    	Account.auth.findOne({username: opts.jid.local}, function(err, user) {
        if(err) console.log(err);
          if (user.username && opts.password)
            cb(null, opts);
          else
            cb(new Error("Authentication failure"));
      });
    });

    client.on('offline', function () {
    	console.log('saiu');
    });

  });
	
});