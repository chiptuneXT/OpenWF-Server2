'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var shop = {
	items: _mongoose2.default.model('Shop', new Schema({
		type: String,
		item: {
			id: String,
			expirationTime: String,
			durabilityPoints: String,
			repair_cost: String,
			quantity: String,
			name: String,
			item_category_override: String,
			offer_status: String,
			supplier_id: String,
			discount: String,
			rank: String,
			game_price: String,
			cry_price: String,
			crown_price: String,
			game_price_origin: String,
			cry_price_origin: String,
			crown_price_origin: String,
			key_item_name: String,
			key_item_price: String
		}
	}))
};

exports.default = shop;
//# sourceMappingURL=model.js.map