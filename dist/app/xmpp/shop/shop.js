'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = require('../../modules/shop/model');

var _model2 = _interopRequireDefault(_model);

var _ltx = require('ltx');

var _ltx2 = _interopRequireDefault(_ltx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseXML(items) {
    var shopItems = '';
    for (var i = 0; i < items.length; i++) {
        if (items[i]) {
            if (items[i].item) {
                shopItems += '<offer id="' + items[i].item.id + '" expirationTime="' + items[i].item.expirationTime + '" durabilityPoints="' + items[i].item.durabilityPoints + '" repair_cost="' + items[i].item.repair_cost + '" quantity="' + items[i].item.quantity + '" name="' + items[i].item.name + '" item_category_override="' + items[i].item.item_category_override + '" offer_status="' + items[i].item.offer_status + '" supplier_id="' + items[i].item.supplier_id + '" discount="' + items[i].item.discount + '" rank="' + items[i].item.rank + '" game_price="' + items[i].item.game_price + '" cry_price="' + items[i].item.cry_price + '" crown_price="' + items[i].item.crown_price + '" game_price_origin="' + items[i].item.game_price_origin + '" cry_price_origin="' + items[i].item.cry_price_origin + '" crown_price_origin="' + items[i].item.crown_price_origin + '" key_item_name="' + items[i].item.key_item_name + '" key_item_price="' + items[i].item.key_item_price + '"/>';
            }
        }
    }
    return shopItems;
}

exports.default = function (client, stz) {
    _model2.default.items.find({}, function (err, items) {
        var shop = _ltx2.default.parse("<iq to='" + stz.attrs.from + "' from='" + stz.attrs.to + "' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<shop_get_offers code='3' from='500' to='250' hash=''>" + parseXML(items) + '</shop_get_offers>' + "</query>" + "</iq>");
        client.send(shop);
    });
};
//# sourceMappingURL=shop.js.map