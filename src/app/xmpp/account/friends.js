import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

let arrayFriends = [];

function parseXML(fri){
  let friendsList = '';
  for (let i = 0; i < fri.length; i++) {
    if(fri[i]){
      if(fri[i].all[0].profile){
        friendsList += "<friend jid='"+fri[i].all[1].user.username+"@warface/GameClient' profile_id='"+fri[i].all[0].profile.profileid+"' nickname='"+fri[i].all[0].profile.nickname+"' status='0' experience='"+fri[i].all[0].profile.experience+"' location=''/>";
      }
    }
  }
  return friendsList;
}

function getFriend(id, cb){
  Account.friends.find({my_profile_id: id}, function(err, fri) {
    
    for (let i = 0; i < fri.length; i++) {
      Account.profile.findOne({profileid: fri[i].to_profile_id}, function(err, profile) {
        Account.auth.findOne({profileid: fri[i].to_profile_id}, function(err, user) {
          if(user || profile !== null){
            arrayFriends.push({all: [ {profile: profile}, {user: user} ]});
          }
        });
      });
    }

    setTimeout(function(){
      cb(parseXML(arrayFriends));
    }, 200)

  });
}

export default (client, stz) => {
	Account.profile.findOne({username: client.jid.user}, function(err, user) {
      getFriend(user.profileid, function(friends_list){

            let friends = ltx.parse(
                "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' id='"+stz.attrs.id+"' type='get'>"+
                    "<query xmlns='urn:cryonline:k01'>"+
                        "<friend_list>"+
                            friends_list+
                        "</friend_list>"+
                    "</query>"+
                "</iq>");
            client.send(friends);
            arrayFriends = [];

      });
	});
};