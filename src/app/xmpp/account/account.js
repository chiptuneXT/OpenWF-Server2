import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz) => {
	Account.auth.findOne({username: client.jid.user}, function(err, user) {
		let account = ltx.parse(
            "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<account user='"+user.userid+"' active_token='' survival_lb_enabled='1'>"+
                        "<masterservers>"+
                            "<server resource='main_pve_6' server_id='6' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='245'/>"+
                                    "<load_stat type='pve' value='244'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_7' server_id='7' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='243'/>"+
                                    "<load_stat type='pve' value='248'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_2' server_id='202' channel='pvp_skilled' rank_group='all' load='0.000000' online='0' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_6' server_id='206' channel='pvp_skilled' rank_group='all' load='0.000000' online='0' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='249'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_newbie_2' server_id='102' channel='pvp_newbie' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='15' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='245'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_2' server_id='302' channel='pvp_pro' rank_group='all' load='0.000000' online='0' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_5' server_id='305' channel='pvp_pro' rank_group='all' load='0.000000' online='0' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='241'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_9' server_id='9' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+
                            
                            "<server resource='main_pvp_pro_1' server_id='301' channel='pvp_pro' rank_group='all' load='0.000000' online='0' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='240'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_8' server_id='8' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='240'/>"+
                                    "<load_stat type='pve' value='243'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_newbie_3' server_id='103' channel='pvp_newbie' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='15' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='237'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_newbie_4' server_id='104' channel='pvp_newbie' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='15' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='241'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_1' server_id='201' channel='pvp_skilled' rank_group='all' load='0.000000' online='0' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='232'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_6' server_id='306' channel='pvp_pro' rank_group='all' load='0.000000' online='0' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_5' server_id='205' channel='pvp_skilled' rank_group='all' load='0.000000' online='0' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='243'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_3' server_id='203' channel='pvp_skilled' rank_group='all' load='0.000000' online='0' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='232'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_5' server_id='5' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='243'/>"+
                                    "<load_stat type='pve' value='248'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_1' server_id='1' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='246'/>"+
                                    "<load_stat type='pve' value='245'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_2' server_id='2' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='247'/>"+
                                    "<load_stat type='pve' value='246'/>"+
                                "</load_stats>"+
                            "</server>"+
                            
                            "<server resource='main_pvp_pro_7' server_id='307' channel='pvp_pro' rank_group='all' load='0.000000' online='0' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='247'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_newbie_1' server_id='101' channel='pvp_newbie' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='15' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='228'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_8' server_id='308' channel='pvp_pro' rank_group='all' load='0.000000' online='0' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='240'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_3' server_id='3' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='243'/>"+
                                    "<load_stat type='pve' value='246'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_3' server_id='303' channel='pvp_pro' rank_group='all' load='0.000000' online='0' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='243'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_10' server_id='10' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='249'/>"+
                                    "<load_stat type='pve' value='239'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_pro_4' server_id='304' channel='pvp_pro' rank_group='all' load='0.000000' online='0' min_rank='41' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='244'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pve_4' server_id='4' channel='pve' rank_group='all' load='0.000000' online='0' min_rank='1' max_rank='80' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='255'/>"+
                                    "<load_stat type='survival' value='249'/>"+
                                    "<load_stat type='pve' value='240'/>"+
                                "</load_stats>"+
                            "</server>"+

                            "<server resource='main_pvp_skilled_4' server_id='204' channel='pvp_skilled' rank_group='all' load='0.000000' online='0' min_rank='16' max_rank='40' bootstrap=''>"+
                                "<load_stats>"+
                                    "<load_stat type='quick_play' value='249'/>"+
                                    "<load_stat type='survival' value='255'/>"+
                                    "<load_stat type='pve' value='255'/>"+
                                "</load_stats>"+
                            "</server>"+
                        "</masterservers>"+
                    "</account>"+
                "</query>"+
            "</iq>");
		client.send(account);

	});

    Account.profile.findOne({username: client.jid.user}, function(err, user) {

        // let clan_n = ltx.parse(
        //     "<iq from='"+stz.attrs.to+"' to='"+stz.attrs.from+"' id='"+stz.attrs.id+"' type='get'>"+
        //         "<query xmlns='urn:cryonline:k01'>"+
        //             "<clan_info>"+
        //                 "<clan name='Privado' clan_id='1' description='' creation_date='1463967639' master='Rubens' clan_points='0' members='1' master_badge='' master_stripe='' master_mark='' leaderboard_position='36428'>"+
        //                     "<clan_member_info nickname='"+user.nickname+"' profile_id='"+user.profileid+"' experience='"+user.experience+"' clan_points='0' invite_date='1463967786' clan_role='1' jid='' status='1'/>"+
        //                     "<clan_member_info nickname='ZUEIRO' profile_id='75891' experience='8627825' clan_points='0' invite_date='1463967639' clan_role='2' jid='' status='3'/>"+
        //                     "<clan_member_info nickname='(WF)Rodrigo' profile_id='371109' experience='862784' clan_points='0' invite_date='1463967639' clan_role='3' jid='' status='3'/>"+
        //                 "</clan>"+
        //             "</clan_info>"+
        //         "</query>"+
        //     "</iq>");
        // client.send(clan_n);

    });


};