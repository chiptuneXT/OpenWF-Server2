'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _core;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Schema = _mongoose2.default.Schema;

var account = {
	auth: _mongoose2.default.model('User', new Schema({
		userid: Number,
		profileid: Number,
		username: String,
		nickname: String,
		password: String,
		email: String,
		affiliateid: String,
		lang: String
	})),
	profile: _mongoose2.default.model('Profile', new Schema({
		profileid: Number,
		nickname: String,
		gender: String,
		height: Number,
		head: String,
		current_class: Number,
		experience: Number,
		pvp_rating_points: Number,
		banner_badge: String,
		banner_mark: String,
		banner_stripe: String,
		game_money: Number,
		cry_money: Number,
		crown_money: Number,
		items: [{
			id: Number,
			name: String,
			attached_to: Number,
			config: String,
			slot: Number,
			equipped: Number,
			default: Number,
			permanent: Number,
			expired_confirmed: Number,
			buy_time_utc: Number,
			expiration_time_utc: Number,
			seconds_left: Number
		}]
	})),
	friends: _mongoose2.default.model('Friends', new Schema({
		my_profile_id: Number,
		to_profile_id: Number
	})),
	missions: _mongoose2.default.model('Missions', new Schema({
		mission_key: String,
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
			obj: { type: Array, "default": [] }
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
	})),
	gameroomopen: _mongoose2.default.model('GameRoom', new Schema({
		room_id: String,
		room_type: String,
		jid_created: String,
		core: (_core = {
			teams_switched: String,
			room_name: String,
			private: String,
			players: String,
			can_start: String,
			team_balanced: String,
			min_ready_players: String,
			revision: String
		}, _defineProperty(_core, 'players', { type: Array, "default": [] }), _defineProperty(_core, 'team_colors', { type: Array, "default": [] }), _core),
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
		mission: {
			mission_key: String
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
	}))
};

exports.default = account;
//# sourceMappingURL=model.js.map