// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var randomid    = require('./app/lib/randomid');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens;
var config = require('./config'); // get our config file;
var User   = require('./app/models/user'); // get our mongoose model;
var Profile  = require('./app/models/profile');
var Friends = require('./app/models/friends');
var Missions = require('./app/models/missions');
var GameRoom = require('./app/models/gameroom');
//var ProfileUp  = require('./app/models/update_profile');

// User.find({}, function(e, r){
//   console.log(r);
// })

// var arrayFriends = [];

// function parseXML(fri){
//   var friendsList = '';
//   for (var i = 0; i < fri.length; i++) {
//     if(fri[i]){
//       friendsList += "<friend jid='' profile_id='"+fri[i].profileid+"' nickname='"+fri[i].nickname+"' status='0' experience='"+fri[i].experience+"' location=''/>";
//     }
//   }
//   return friendsList;
// }

// function getFriend(id, cb){
//   Friends.find({my_profile_id: id}, function(err, fri) {
    
//     for (var i = 0; i < fri.length; i++) {
//       Profile.findOne({profileid: fri[i].to_profile_id}, function(err, user) {
//         arrayFriends.push(user);
//       });
//     }

//     setTimeout(function(){
//       cb(parseXML(arrayFriends));
//     }, 100)

//   });
// }

// getFriend(852240, function(res){
//   console.log(res);
// });

// Missions.find({}, function(e, r){
//   console.log(r[0]);
// })

// var garoom =  new GameRoom({
//   room_id: String,
//   room_type: String,
//   core: {
//     teams_switched: String,
//     room_name: String,
//     private: String,
//     players: String,
//     can_start: String,
//     team_balanced: String,
//     min_ready_players: String,
//     revision: String,
//     players: { type : Array , "default" : [] },
//     team_colors: { type : Array , "default" : [] }
//   },
//   session: {
//     id: String,
//     status: String,
//     game_progress: String,
//     start_time: String,
//     revision: String 
//   },
//   custom_params: {
//     friendly_fire: String,
//     enemy_outlines: String,
//     auto_team_balance: String,
//     dead_can_chat: String,
//     join_in_the_process: String,
//     max_players: String,
//     round_limit: String,
//     class_restriction: String,
//     inventory_slot: String
//   },
//   mission:{
//     mission_key: String,
//   },
//   kick_vote_params: {
//     success: String,
//     timeout: String,
//     cooldown: String,
//     revision: String
//   },
//   room_master: {
//     master: String,
//     revision: String
//   }
// });

// var mi =  new Missions({
  
//   mission_key: '27b68559-cfbe-4efd-ba09-f4240279fb99',
//   no_teams: '1',
//   name: '@na_mission_path01_1',
//   setting: 'africa/africa_base',
//   mode: 'pve',
//   mode_name: '@PvE_game_mode_desc',
//   mode_icon: 'pve_icon',
//   description: '@mission_desc_africa_path',
//   image: 'mapImgAfrica_training',
//   difficulty: 'easy',
//   type: 'trainingmission',
//   time_of_day: '9:06',
    
//   objectives: {
//     factor: '1',
//     obj: [{
//       id: '0',
//       type: 'primary'
//     },{
//       id: '5',
//       type: 'secondary'
//     },{
//       id: '16',
//       type: 'secondary'
//     }]
//   },

//   crownrewardsthresholds: {
//     totalperformance: {
//       bronze: '48665',
//       silver: '77875',
//       gold: '122510'
//     },
//     time: {
//       bronze: '4192831',
//       silver: '4193402',
//       gold: '4193543'
//     }
//   },
    
//   crownrewards: {
//     bronze: '2',
//     silver: '4',
//     gold: '6'
//   }

// })

// mi.save(function(err) {
//   console.log(mi);
// });

// var fri = new Friends({
//   my_profile_id: '222652',
//   to_profile_id: '608714'
// });

// fri.save(function(err) {
//   console.log(fri);
// });

// var demo = new User({
//     userid: randomid(5),
//     profileid: randomid(6),
//     username: 'set',
//     nickname: '-setTimeout-',
//     affiliateid: 'CYT000000000',
//     password: '12345',
//     email: 'set@warface.com',
//     lang: 'pt-br'
//   });
//   demo.save(function(err) {
//     console.log(demo);
// });

// User.findOne({profileid: '702743'}, function(err, user) {
//   Profile.findOne({profileid: '702743'}, function(err, profile) {
//     if(user || profile !== null){
//       var teste = [{profile: profile}, {user: user}];

//       console.log(teste[0].profile.items);
//     }
//   });
// });


// GameRoom.findOne({'core.players': {$elemMatch: {online_id: 'rubens@warface/GameClient'}}}, function(err, res) {
  
// }).sort({_id:1});















// var profileadd = new Profile({
//   profileid: '608714',
//   username: 'set',
//   nickname: '-setTimeout-',
//   gender: 'male',
//   height: '1',
//   head: 'default_head_4',
//   current_class: '0',
//   experience: '17364000',
//   pvp_rating_points: '0',
//   banner_badge: '4294967295',
//   banner_mark: '4294967295',
//   banner_stripe: '4294967295',
//   game_money: '8500000',
//   cry_money: '2500000',
//   crown_money: '800000',
//   items: [{
//     id: '1', 
//     name: 'mk01', 
//     attached_to: '0',
//     config: 'dm=0;material=default;pocket_index=32768', 
//     slot: '1', 
//     equipped: '8', 
//     default: '1', 
//     permanent: '0', 
//     expired_confirmed: '0', 
//     buy_time_utc: '0', 
//     expiration_time_utc: '0', 
//     seconds_left: '0'
//   }]
// });

// profileadd.save(function(err) {
//   console.log(profileadd);
// });

/*Profile.findOneAndUpdate({profileid: '219761'}, {$push: {"items": {
  id: '2', 
  name: 'kn01', 
  attached_to: '0',
  config: 'dm=0;material=default', 
  slot: '2', 
  equipped: '29', 
  default: '1', 
  permanent: '0', 
  expired_confirmed: '0', 
  buy_time_utc: '0', 
  expiration_time_utc: '0', 
  seconds_left: '0'
}}}, {safe: true, upsert: true}, function(err, rawResponse) {
    console.log(err)
});*/

//Add item
/*Profile.update({nickname: 'setTimeout'},{$push: {
  items: { 
      id: '3', 
      name: 'shg01_default', 
      attached_to: '0',
      config: 'dm=0;material=default', 
      slot: '3', 
      equipped: '8', 
      default: '1', 
      permanent: '0', 
      expired_confirmed: '0', 
      buy_time_utc: '0', 
      expiration_time_utc: '0', 
      seconds_left: '0'
  }

}},{upsert:true},function(err){
        if(err){
                console.log(err);
        }else{
                console.log("Successfully added");
        }
});*/

// User.findOne({profileid: '219761'}, function(err, profile) {

//   // Delete item
//   Profile.update({profileid: '219761'}, {$pull: { items: { _id: '5740899bb94b13ac35e14ac0' }}},function(err){
//         if(err){
//                 console.log(err);
//         }else{
//                 console.log("Successfully removed");
//         }
//   });
//   //console.log(profile)

// });

// User.remove({ _id: '57689505cd75ab0b0bb9223b' }, function(err) {
//     if (!err) {
//       console.log('1')
//     }
//     else {
//       console.log('2');
//     }
// });


    
// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8759; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable
cors = require('cors');
app.use(cors());

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// use morgan to log requests to the console
app.use(morgan('dev'));

var apiRoutes = express.Router(); 

apiRoutes.get('/', function(req, res) {
  res.json({"status":0,"exception":{"message":"Required REST parameter \"email\" has empty value.","code":90003},"data":{"eulaversion":""}});
});

apiRoutes.post('/auth', function(req, res) {

  // find the user
  User.findOne({
    email: req.body.email
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({
          "status": 0,
          "exception": {
            "message": "Wrong email address or password.",
            "code": 10010
          },
          "data": {
            "eulaversion": ""
          }
      });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({
          "status": 0,
          "exception": {
            "message": "Wrong email address or password.",
            "code": 10010
          },
          "data": {
            "eulaversion": ""
          }
        });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          ignoreExpiration: true
        });

        // return the information including token as JSON
        res.json({
          "status": 1,
          "exception": null,
          "data": {
            "nickname": user.nickname,
            "username": user.username,
            "sessionToken": token,
            "presistentToken": "",
            "steamid": null,
            "affiliateid": user.affiliateid,
            "lang": user.lang
          }
        });
      }   

    }

  });
});

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({
          "rsp": {
            "stat": "fail",
            "payload": [
              {
                "err": {
                  "code": "10001",
                  "msg": "Session not found for: \""+token+"\""
                }
              }
            ]
          }
        });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      "rsp": {
        "stat": "fail",
        "payload": [
          {
            "err": {
              "code": "10003",
              "msg": "anonymous access not allowed"
            }
          }
        ]
      }
    });
    
  }
});

apiRoutes.get('/user/get/my.json', function(req, res) {

  User.find({ username: req.decoded._doc.username }, function(err, user) {

    res.json({
      "rsp": {
        "stat": "ok",
        "payload": [
          {
            "seed": {
              "id": user[0]._id,
              "created": "1970-01-01T00:00:00Z",
              "modified": "1970-01-01T00:00:00Z",
              "owner": {
                "id": user[0]._id
              },
              "author": {
                "id": user[0]._id
              },
              "permission": "shared",
              "title": user[0].username,
              "type": "user",
              "user": {
                "nickname": user[0].username,
                "stage": "activated",
                "activatebydate": "2015-10-30Z",
                "lang": "en",
                "country": "BR",
                "affiliateid": user[0].affiliateid,
                "recruiter": {
                  "id": user[0]._id
                },
                "platform_marketing": "subscribed"
              }
            }
          }
        ]
      }
    });

  });
});   

app.use('/api', apiRoutes);

app.listen(port);
console.log('Warface api location http://localhost:' + port);