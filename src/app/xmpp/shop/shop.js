import Shop from '../../modules/shop/model';
import ltx from 'ltx';

function parseXML(items){
  let shopItems = '';
  for (let i = 0; i < items.length; i++) {
    if(items[i]){
      if(items[i].item){
        shopItems += '<offer id="'+items[i].item.id+'" expirationTime="'+items[i].item.expirationTime+'" durabilityPoints="'+items[i].item.durabilityPoints+'" repair_cost="'+items[i].item.repair_cost+'" quantity="'+items[i].item.quantity+'" name="'+items[i].item.name+'" item_category_override="'+items[i].item.item_category_override+'" offer_status="'+items[i].item.offer_status+'" supplier_id="'+items[i].item.supplier_id+'" discount="'+items[i].item.discount+'" rank="'+items[i].item.rank+'" game_price="'+items[i].item.game_price+'" cry_price="'+items[i].item.cry_price+'" crown_price="'+items[i].item.crown_price+'" game_price_origin="'+items[i].item.game_price_origin+'" cry_price_origin="'+items[i].item.cry_price_origin+'" crown_price_origin="'+items[i].item.crown_price_origin+'" key_item_name="'+items[i].item.key_item_name+'" key_item_price="'+items[i].item.key_item_price+'"/>';
      }
    }
  }
  return shopItems;
}

export default (client, stz) => {
    Shop.items.find({}, function(err, items) {
        let shop = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<shop_get_offers code='3' from='500' to='250' hash=''>"+
                        parseXML(items)+
                    '</shop_get_offers>'+
                "</query>"+
            "</iq>"
        )
        client.send(shop); 
    });
};