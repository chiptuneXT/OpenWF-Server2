import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz) => {
	Account.auth.findOne({username: client.jid.user}, function(err, user) {
        let profile = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<quickplay_maplist>"+
                        "<map mission='e4f56e59-97fb-4451-a137-7b44026d96b0'/>"+
                        "<map mission='f405283f-42f9-4d5e-b02a-618cacd10cf4'/>"+
                        "<map mission='3347d361-ef36-4c57-8bca-4f8051fc97e6'/>"+
                        "<map mission='805b24e5-f5b6-447c-b7a5-c82c6b0134cb'/>"+
                        "<map mission='e5981b6a-325d-42eb-a3fe-e6eed0bc4bf2'/>"+
                        "<map mission='51a9ebbc-8519-4f5e-b83e-0e9911c6995c'/>"+
                        "<map mission='bbb33b77-98db-463c-9a1a-d27655d90690'/>"+
                        "<map mission='90c7e3c1-6432-4745-8abc-40cbccaa4d25'/>"+
                        "<map mission='1d71c946-7ffc-4045-8035-14eea4072e02'/>"+
                        "<map mission='0575ee9b-db2a-4a8d-a376-c2ec4b021587'/>"+
                        "<map mission='73904867-1107-4db2-a7eb-4593d580f835'/>"+
                        "<map mission='e1129d41-42fd-4451-b729-4b7ff5f4e3e7'/>"+
                        "<map mission='d0af9f60-6402-11c4-8d37-8c89a553425b'/>"+
                        "<map mission='70e29d78-bb85-4014-8989-ffeb9074d2bc'/>"+
                        "<map mission='959ddc2d-9bb4-4eab-9be8-8e04e76d94aa'/>"+
                        "<map mission='2124463b-0612-4882-a5de-b222b21bf0e6'/>"+
                        "<map mission='3f57cdb0-010a-11e5-a726-8c99a553325b'/>"+
                    "</quickplay_maplist>"+
                "</query>"+
            "</iq>"
        )
        client.send(profile); 
	});
};