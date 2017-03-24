// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var Missions = mongoose.model('Missions', new Schema({ 
    
    mission_key: {
        type: String,
        required: true,
        validate: [
            { validator: missionVrExist, msg: 'Missão já existe.'}
        ]
    },
    no_teams: String,
    name: String,
    setting: String,
    mode: String,
    mode_name: String,
    mode_icon: String,
    description: String,
    image: String,
    difficulty: String,
    type: String,
    time_of_day: String,
    
    objectives: {
        factor: String,
        obj: { type : Array , "default" : [] }
    },

    crownrewardsthresholds: {
        totalperformance: {
            bronze: String,
            silver: String,
            gold: String
        },
        time: {
            bronze: String,
            silver: String,
            gold: String
        }
    },
    
    crownrewards: {
        bronze: String,
        silver: String,
        gold: String
    }

}));

function missionVrExist(value, done) {
  if (value) {
    Missions.findOne({ mission_key: value }, (err, count) => {
      if (err) {
        return done(err);
      }
      done(!count);
    });
  }
}

module.exports = Missions;