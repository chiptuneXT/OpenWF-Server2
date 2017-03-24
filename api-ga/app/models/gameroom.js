// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('GameRoom', new Schema({ 
	room_id: String,
    room_type: String,
    core: {
        teams_switched: String,
        room_name: String,
        private: String,
        players: String,
        can_start: String,
        team_balanced: String,
        min_ready_players: String,
        revision: String,
        players: { type : Array , "default" : [] },
        team_colors: { type : Array , "default" : [] }
    },
    session: {
        id: String,
        status: String,
        game_progress: String,
        start_time: String,
        revision: String 
    },
    custom_params: {
        friendly_fire: String,
        enemy_outlines: String,
        auto_team_balance: String,
        dead_can_chat: String,
        join_in_the_process: String,
        max_players: String,
        round_limit: String,
        class_restriction: String,
        inventory_slot: String
    },
    mission:{
        mission_key: String,
    },
    kick_vote_params: {
        success: String,
        timeout: String,
        cooldown: String,
        revision: String
    },
    room_master: {
        master: String,
        revision: String
    }
}));