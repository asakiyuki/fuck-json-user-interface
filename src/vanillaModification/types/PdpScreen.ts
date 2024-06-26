export type PdpScreenTypes = "download_progress" | "download_progress/stacker" | "download_progress/stacker/sizer_text" | "download_progress/stacker/sizer_text/download_progress_text" | "download_progress/stacker/sizer_bar" | "download_progress/stacker/sizer_bar/download_progress_bar" | "summary_box_button_panel" | "summary_box_button_panel/buttons_panel" | "summary_box_button_panel/download_buttons_panel" | "summary_box_button_panel/focus_border" | "interaction_button_content" | "interaction_button_content/line1_panel" | "interaction_button_content/line1_panel/upsell_text" | "interaction_button_panel" | "interaction_button_panel/content_action_button" | "interaction_button_panel/progress_bar" | "interaction_button_panel/focus_border" | "download_progress_small" | "download_progress_small/stacker" | "download_progress_small/stacker/sizer_text" | "download_progress_small/stacker/sizer_text/download_progress_text" | "download_progress_small/stacker/sizer_bar" | "download_progress_small/stacker/sizer_bar/download_progress_bar" | "progress_loading_anim" | "focus_border" | "focus_border/default" | "focus_border/default/loading_anim" | "focus_border/hover" | "focus_border/hover/loading_anim" | "focus_border/pressed" | "focus_border/pressed/loading_anim" | "purchase_button_base" | "deactivated_purchase_button_base" | "download_buttons_panel" | "download_buttons_panel/progress_panel" | "download_buttons_panel/progress_panel/progress_bar" | "smooth_buttons_panel" | "smooth_buttons_panel/purchase_buttons_panel" | "smooth_buttons_panel/deactivated_purchase_buttons_panel" | "smooth_buttons_panel/interact_filling_button" | "smooth_buttons_panel/interact_exit_world_filling_button" | "disabled_interact_label_formfitting" | "disabled_interact_label_formfitting/info_icon" | "disabled_interact_label_formfitting/info_icon_pad" | "disabled_interact_label_formfitting/interact_label_panel" | "disabled_interact_label_formfitting/interact_label_panel/interact_label_text_left" | "disabled_interact_label_formfitting/pad" | "interact_label_text" | "smooth_purchase_buttons_panel" | "smooth_purchase_buttons_panel/purchase_coins_button_panel" | "smooth_purchase_buttons_panel/purchase_coins_button_panel/smooth_purchase_with_coins_button" | "smooth_purchase_buttons_panel/pad_h1" | "smooth_purchase_buttons_panel/purchase_currency_button_panel" | "smooth_purchase_buttons_panel/purchase_currency_button_panel/purchase_with_currency_button" | "deactivated_smooth_purchase_buttons_panel" | "deactivated_smooth_purchase_buttons_panel/purchase_coins_button_panel" | "deactivated_smooth_purchase_buttons_panel/purchase_coins_button_panel/deactivated_smooth_purchase_with_coins_button" | "deactivated_smooth_purchase_buttons_panel/pad_h1" | "deactivated_smooth_purchase_buttons_panel/purchase_currency_button_panel" | "deactivated_smooth_purchase_buttons_panel/purchase_currency_button_panel/deactivated_purchase_with_currency_button" | "smooth_save_share_button_panel" | "smooth_save_share_button_panel/pad_0" | "smooth_save_share_button_panel/share_button" | "smooth_save_share_button_panel/pad_1" | "smooth_save_share_button_panel/save_button" | "currency_purchase_label" | "currency_purchase_label/currency_purchase_label_text" | "coin_image" | "smooth_currency_purchase_label" | "smooth_currency_purchase_label/currency_purchase_label_text" | "large_button_markdown_background" | "large_button_markdown_background/banner" | "large_button_markdown_background/triangle_panel" | "large_button_markdown_background/triangle_panel/triangle" | "discount_label" | "coin_purchase_label_text" | "smooth_coin_purchase_label_formfitting" | "smooth_coin_purchase_label_formfitting/sales_banner_offset_panel" | "smooth_coin_purchase_label_formfitting/sales_banner_offset_panel/sales_banner_panel" | "smooth_coin_purchase_label_formfitting/sales_banner_offset_panel/sales_banner_panel/markdown_banner" | "smooth_coin_purchase_label_formfitting/markdown_panel" | "smooth_coin_purchase_label_formfitting/markdown_panel/markdown_label" | "smooth_coin_purchase_label_formfitting/fill_pad_left" | "smooth_coin_purchase_label_formfitting/left_coin_image_offset_panel" | "smooth_coin_purchase_label_formfitting/left_coin_image_offset_panel/coin" | "smooth_coin_purchase_label_formfitting/coin_purchase_label_panel" | "smooth_coin_purchase_label_formfitting/coin_purchase_label_panel/coin_purchase_label_text_left" | "smooth_coin_purchase_label_formfitting/pad" | "smooth_coin_purchase_label_formfitting/right_coin_image_offset_panel" | "smooth_coin_purchase_label_formfitting/right_coin_image_offset_panel/coin" | "smooth_coin_purchase_label_formfitting/fill_pad_right" | "disabled_smooth_coin_purchase_label_formfitting" | "disabled_smooth_coin_purchase_label_formfitting/sales_banner_offset_panel" | "disabled_smooth_coin_purchase_label_formfitting/sales_banner_offset_panel/sales_banner_panel" | "disabled_smooth_coin_purchase_label_formfitting/sales_banner_offset_panel/sales_banner_panel/markdown_banner" | "disabled_smooth_coin_purchase_label_formfitting/markdown_panel" | "disabled_smooth_coin_purchase_label_formfitting/markdown_panel/markdown_label" | "disabled_smooth_coin_purchase_label_formfitting/fill_pad_left" | "disabled_smooth_coin_purchase_label_formfitting/info_icon" | "disabled_smooth_coin_purchase_label_formfitting/left_coin_image_offset_panel" | "disabled_smooth_coin_purchase_label_formfitting/left_coin_image_offset_panel/coin" | "disabled_smooth_coin_purchase_label_formfitting/info_icon_pad" | "disabled_smooth_coin_purchase_label_formfitting/coin_purchase_label_panel" | "disabled_smooth_coin_purchase_label_formfitting/coin_purchase_label_panel/coin_purchase_label_text_left" | "disabled_smooth_coin_purchase_label_formfitting/pad" | "disabled_smooth_coin_purchase_label_formfitting/right_coin_image_offset_panel" | "disabled_smooth_coin_purchase_label_formfitting/right_coin_image_offset_panel/coin" | "disabled_smooth_coin_purchase_label_formfitting/fill_pad_right" | "share_icon" | "share_label" | "share_label/share_image_offset_panel" | "share_label/share_image_offset_panel/link_share" | "save_label_panel" | "save_label_panel/heart_image" | "save_label_panel/progress_loading" | "save_label" | "save_label/save_image_offset_panel" | "save_label/save_image_offset_panel/full_heart" | "save_label/save_image_offset_panel/empty_heart" | "large_button_coin_purchase_label" | "large_button_coin_purchase_label/markdown_banner_filler_panel" | "large_button_coin_purchase_label/center_markdown_panel" | "large_button_coin_purchase_label/center_markdown_panel/markdown_banner" | "large_button_coin_purchase_label/sales_padding_0" | "large_button_coin_purchase_label/price_markdown_panel" | "large_button_coin_purchase_label/price_markdown_panel/price_markdown_label" | "large_button_coin_purchase_label/sales_padding_1" | "large_button_coin_purchase_label/left_coin_image_offset_panel" | "large_button_coin_purchase_label/left_coin_image_offset_panel/coin" | "large_button_coin_purchase_label/coin_purchase_label_panel" | "large_button_coin_purchase_label/coin_purchase_label_panel/coin_purchase_label_text" | "large_button_coin_purchase_label/right_coin_image_offset_panel" | "large_button_coin_purchase_label/right_coin_image_offset_panel/coin" | "large_button_coin_purchase_label/fill_padding_1" | "price_markdown_panel" | "price_markdown_panel/offer_price" | "price_markdown_panel/offer_price/text_strike_through" | "vertical_padding_2px" | "vertical_padding_4px" | "vertical_padding_fill" | "horizontal_padding_2px" | "horizontal_padding_4px" | "horizontal_padding_8px" | "horizontal_padding_fill" | "empty_content_panel" | "section_header" | "section_header/header_label" | "content_section_bg" | "content_section_bg/pad" | "content_section_bg/section_header" | "content_section_bg/bg_and_content" | "content_section_bg/bg_and_content/bg" | "content_section_bg/bg_and_content/bg/$content" | "content_section_boarder_bg" | "content_section_boarder_bg/pad" | "content_section_boarder_bg/bg_and_content" | "content_section_boarder_bg/bg_and_content/bg" | "content_section_boarder_bg/bg_and_content/bg/inner" | "content_section_boarder_bg/bg_and_content/bg/inner/$content" | "content_section_boarder_bg/pad_3" | "content_section_boarder_bg/divider_3" | "realms_default_animation" | "realms_hover_animation" | "summary_factory_object" | "summary_factory_object/summary" | "summary_factory_object/update_notification_section" | "screenshot_carousel_factory_object" | "screenshot_carousel_factory_object/resource_pack_content_panel" | "screenshot_carousel_factory_object/pad_3" | "screenshot_carousel_factory_object/divider_3" | "skin_pack_section_factory_object" | "skin_pack_section_factory_object/skin_pack_section_factory_content" | "skin_pack_section_factory_object/skin_pack_section_factory_content/skin_pack_content_panel" | "skin_pack_section_factory_object/skin_pack_section_factory_content/pad_3" | "skin_pack_section_factory_object/skin_pack_section_factory_content/divider_3" | "panorama_view_factory_object" | "panorama_view_factory_object/panorama_view_content_panel" | "panorama_view_factory_object/pad_3" | "panorama_view_factory_object/divider_3" | "ratings_factory_object" | "ratings_factory_object/rating_factory_object_content" | "bundle_summary_factory_object" | "bundle_summary_factory_object/bundle_summary_factory_object_content" | "bundles_upsell_factory_object" | "bundles_upsell_factory_object/bundle_upsell_factor_object_content" | "pdp_cycle_offer_row_content" | "pdp_cycle_offer_row_content/store_row_panel" | "pdp_cycle_offer_row_content/pad_3" | "pdp_cycle_offer_row_content/divider_3" | "pdp_cycle_offer_row_section" | "recently_viewed_viewed_factory_object" | "scrolling_content_stack" | "warning_image" | "scaling_rating" | "scaling_rating/empty_rating" | "scaling_rating/empty_rating/full_rating" | "scaling_rating_new" | "scaling_rating_new/empty_rating" | "scaling_rating_new/empty_rating/full_rating" | "chart_section" | "chart_section/stack" | "chart_section/stack/star_number_panel" | "chart_section/stack/star_number_panel/star_number" | "chart_section/stack/star_panel" | "chart_section/stack/star_panel/star_img" | "chart_section/stack/pad_0" | "chart_section/stack/bar_panel" | "chart_section/stack/bar_panel/bar" | "chart_section/stack/bar_panel/bar/full_bar" | "chart_section/stack/pad_1" | "chart_section/stack/percent" | "ratings_chart" | "ratings_chart/5_star" | "ratings_chart/4_star" | "ratings_chart/3_star" | "ratings_chart/2_star" | "ratings_chart/1_star" | "ratings_chart_panel" | "ratings_chart_panel/ratings_chart_content" | "ratings_chart_panel/ratings_chart_content/pad_0" | "ratings_chart_panel/ratings_chart_content/title" | "ratings_chart_panel/ratings_chart_content/title/title_text" | "ratings_chart_panel/ratings_chart_content/pad_1" | "ratings_chart_panel/ratings_chart_content/rating_panel" | "ratings_chart_panel/ratings_chart_content/rating_panel/rating" | "ratings_chart_panel/ratings_chart_content/rating_panel/rating/rating_bar" | "ratings_chart_panel/ratings_chart_content/rating_panel/rating/pad" | "ratings_chart_panel/ratings_chart_content/rating_text_panel" | "ratings_chart_panel/ratings_chart_content/rating_text_panel/rating_text" | "ratings_chart_panel/ratings_chart_content/count_panel" | "ratings_chart_panel/ratings_chart_content/count_panel/count" | "ratings_chart_panel/ratings_chart_content/pad_2" | "ratings_chart_panel/ratings_chart_content/chart" | "ratings_chart_panel/ratings_chart_content/pad_3" | "ratings_box" | "ratings_box/ratings_full_panel" | "ratings_box/ratings_full_panel/ratings_chart_and_button" | "ratings_box/ratings_full_panel/ratings_chart_and_button/chart" | "ratings_box/ratings_full_panel/ratings_chart_and_button/pad_1" | "ratings_box/divider" | "user_rating_star_button" | "user_rating_star_button/default" | "user_rating_star_button/default/default_user_rating_star" | "user_rating_star_button/hover" | "user_rating_star_button/hover/hover_user_rating_star" | "user_rating_star_list_grid" | "ratings_interact_panel" | "ratings_interact_panel/title_text" | "ratings_interact_panel/pad_vertical_4px" | "ratings_interact_panel/rating_stars_and_button_panel" | "ratings_interact_panel/rating_stars_and_button_panel/fill_stars" | "ratings_interact_panel/rating_stars_and_button_panel/fill_stars/rating_buttons" | "ratings_interact_panel/rating_stars_and_button_panel/pad_3_percent" | "ratings_interact_panel/rating_stars_and_button_panel/submit_button_panel" | "ratings_interact_panel/rating_stars_and_button_panel/submit_button_panel/submit" | "ratings_interact_panel/pad_vertical_8px" | "ratings_interact_panel/fill_pad" | "ratings_interact_panel/fill_pad/text" | "ratings_interact_panel/send_feedback_button" | "ratings_interact_panel/pad_1" | "ratings_info_panel" | "ratings_info_panel/ratings" | "ratings_info_panel/ratings_right" | "ratings_info_panel/ratings_right/ratings_interact_panel" | "ratings_content_panel" | "panorama_view_content" | "panorama_view_content/panorama_panel" | "panorama_view_content/panorama_panel/panorama_content" | "skins" | "skin_pack_content_panel" | "resource_pack_content" | "resource_pack_content/screenshots" | "play_button" | "realms_plus_expiration" | "realms_plus_expiration/background" | "realms_plus_expiration/icon" | "realms_plus_expiration/text" | "realms_plus_expiration/particles" | "csb_expiration" | "csb_expiration/background" | "csb_expiration/icon" | "csb_expiration/text" | "summary_content_left_side" | "summary_content_left_side/pad_left" | "summary_content_left_side/full_content" | "summary_content_left_side/full_content/top" | "summary_content_left_side/full_content/top/image" | "summary_content_left_side/full_content/top/image/key_image" | "summary_content_left_side/full_content/top/image/key_image/border" | "summary_content_left_side/full_content/top/image/key_image/csb_expiration_banner" | "summary_content_left_side/full_content/top/image/key_image/video_overlay_button" | "summary_content_left_side/full_content/top/image/key_image/video_overlay_button/mask" | "summary_content_left_side/full_content/top/image/key_image/video_overlay_button/default" | "summary_content_left_side/full_content/top/image/key_image/video_overlay_button/hover" | "summary_content_left_side/full_content/top/image/key_image/rtx_label" | "summary_content_left_side/full_content/top/divider" | "summary_content_left_side/full_content/top/info" | "summary_content_left_side/full_content/top/info/summary_title_and_author_panel" | "summary_content_left_side/full_content/top/info/pad_fill" | "summary_content_left_side/full_content/top/info/glyph_section" | "summary_content_left_side/full_content/top/info/glyph_section/glyph_section_panel" | "summary_content_left_side/full_content/top/info/ratings_summary" | "summary_content_left_side/full_content/top/info/ratings_summary/ratings_display" | "summary_content_left_side/full_content/top/info/ratings_summary/ratings_display/rating_stars_panel" | "summary_content_left_side/full_content/top/info/ratings_summary/ratings_display/rating_stars_panel/rating" | "summary_content_left_side/full_content/top/info/ratings_summary/ratings_display/summary_rating_button" | "summary_content_left_side/full_content/bottom" | "offer_title_label" | "title_and_author_panel" | "title_and_author_panel/title_panel" | "title_and_author_panel/author_button_panel" | "title_and_author_panel/author_button_panel/summary_author_button" | "description_label" | "warning_stack_panel" | "warning_stack_panel/warning_icon" | "warning_stack_panel/pad_0" | "warning_stack_panel/warning_text_panel" | "warning_stack_panel/warning_text_panel/warning_text" | "warning_panel" | "warning_panel/background" | "warning_panel/content_stack_panel" | "description_toggle_show_button_panel" | "description_toggle_show_button_panel/description_bottom_right_button_border" | "description_toggle_show_button_panel/description_toggle_show_button" | "description_toggle_show_button_panel/warning_icon" | "glyph_icon" | "glyph_count_label" | "glyph_count_underline_button" | "glyph_count_hover_underline_button_panel" | "glyph_count_hover_underline_button_panel/glyph_hover_popup" | "glyph_count_hover_underline_button_panel/glyph_count_underline_button" | "glyph_icon_with_count" | "glyph_icon_with_count/glyph_icon" | "glyph_icon_with_count/horizontal_padding" | "glyph_icon_with_count/item_glyph_count_panel_label" | "glyph_panel_hover_popup" | "glyph_panel_mashup_hover_popup" | "mashup_glyph_tooltip_content" | "mashup_glyph_tooltip_content/mashup_text_row" | "mashup_glyph_tooltip_content/mashup_text_row/lightbulb_icon" | "mashup_glyph_tooltip_content/mashup_text_row/mashup_line_one" | "mashup_glyph_tooltip_content/mashup_line_two" | "mashup_glyph_tooltip_content/offset_panel" | "mashup_glyph_tooltip_content/offset_panel/basic_vertical_glyph_section_panel" | "glyph_section_mashup" | "glyph_section_skin" | "glyph_section_resource_pack" | "glyph_section_world" | "glyph_section_addon" | "basic_vertical_glyph_section_panel" | "basic_vertical_glyph_section_panel/glyph_section_skin" | "basic_vertical_glyph_section_panel/glyph_section_world" | "basic_vertical_glyph_section_panel/glyph_section_resource_pack" | "basic_vertical_glyph_section_panel/glyph_section_addon" | "vertical_glyph_section_panel" | "vertical_glyph_section_panel/glyph_section_mashup" | "vertical_glyph_section_panel/basic_vertical_glyph_section_panel" | "summary_text_panel" | "summary_text_panel/sale_timer_panel" | "summary_text_panel/sale_timer_panel/timer_label" | "summary_text_panel/top_interact_button_stack" | "summary_text_panel/top_interact_button_stack/top_interact" | "summary_text_panel/apply_to_realm_panel" | "summary_text_panel/apply_to_realm_panel/apply_to_realm_button" | "summary_text_panel/in_csb_panel" | "summary_text_panel/in_csb_panel/in_csb_button" | "summary_text_panel/in_realms_plus_panel" | "summary_text_panel/in_realms_plus_panel/in_realms_plus_button" | "summary_text_panel/in_realms_plus_panel/realms_disabled_button" | "summary_text_panel/progress_loading_anim_panel" | "summary_text_panel/progress_loading_anim_panel/progress_loading_anim" | "summary_text_panel/pad_0" | "summary_text_panel/disclaimer_panel" | "summary_text_panel/pad_1" | "summary_text_panel/save_share_button_panel" | "summary_text_panel/pad_2" | "info_bulb_image" | "info_bulb_image_small" | "realms_incompatable_content" | "realms_incompatable_content/realms_content_stack_panel" | "realms_incompatable_content/realms_content_stack_panel/info_bulb_image" | "realms_incompatable_content/realms_content_stack_panel/padding" | "realms_incompatable_content/realms_content_stack_panel/realms_incompatable_button_label" | "apply_to_realm_button" | "in_realms_plus_button_content" | "in_realms_plus_button_content/realm_icon_panel" | "in_realms_plus_button_content/realm_icon_panel/realms_banner" | "in_realms_plus_button_content/realm_icon_panel/realms_plus_normal" | "in_realms_plus_button_content/realm_icon_panel/realms_plus_hover" | "in_realms_plus_button_content/buffer_panel" | "in_realms_plus_button_content/alignment_text_panel" | "in_realms_plus_button_content/alignment_text_panel/text" | "in_csb_button" | "in_realms_plus_button" | "read_more_button" | "read_more_button/default" | "read_more_button/hover" | "read_more_button/pressed" | "summary_content_right_side" | "summary_content_right_side/pad_middle" | "summary_content_right_side/text" | "summary_content_right_side/entitlements_progress_panel" | "summary_content_right_side/entitlements_progress_panel/progress_loading" | "summary_content_right_side/pad_right" | "summary_content_whole_stack_panel" | "summary_content_whole_stack_panel/left_side" | "summary_content_whole_stack_panel/divider_panel" | "summary_content_whole_stack_panel/right_side" | "summary_content_panel" | "summary_content_panel/pad_top" | "summary_content_panel/summary_content_whole_stack" | "summary_content_panel/pad_3" | "summary_content_panel/divider_3" | "appearance_status_image_panel" | "appearance_status_image_panel/limited_status_image" | "appearance_status_image_panel/no_restrictions_status_image" | "appearance_status_content" | "appearance_status_content/appearance_status_image_panel" | "appearance_status_content/last_update_panel" | "appearance_status_content/last_update_panel/last_update_label" | "dynamic_tooltip_notification_panel" | "dynamic_tooltip_notification_panel/default" | "dynamic_tooltip_notification_panel/hover" | "dynamic_tooltip_notification_panel/pressed" | "update_notification_content" | "update_notification_content/dynamic_tooltip_notification_panel" | "update_notification_content/status" | "update_notification_stack_panel" | "update_notification_stack_panel/pad_0" | "update_notification_stack_panel/content" | "update_notification_stack_panel/pad_1" | "tag_base" | "tag_button_panel" | "tag_button_panel/button" | "tag_button_panel/button/default" | "tag_button_panel/button/hover" | "tag_button_panel/button/pressed" | "tag_button_panel/button/label" | "tag_row_factory" | "player_count_button_panel" | "player_count_button_panel/player_count_button" | "player_count_button_panel/comma" | "player_count_factory" | "language_button_panel" | "language_button_panel/language_button" | "language_button_panel/comma" | "language_row_factory" | "description_inner_panel" | "description_inner_panel/description_stack_panel" | "description_inner_panel/description_stack_panel/pad_0" | "description_inner_panel/description_stack_panel/title_stack_panel" | "description_inner_panel/description_stack_panel/title_stack_panel/title_text_panel" | "description_inner_panel/description_stack_panel/title_stack_panel/title_text_panel/title_label_icon" | "description_inner_panel/description_stack_panel/title_stack_panel/title_text_panel/pad_0" | "description_inner_panel/description_stack_panel/title_stack_panel/title_text_panel/title_label" | "description_inner_panel/description_stack_panel/title_stack_panel/pad_0" | "description_inner_panel/description_stack_panel/title_stack_panel/divider_panel" | "description_inner_panel/description_stack_panel/title_stack_panel/divider_panel/divider" | "description_inner_panel/description_stack_panel/title_stack_panel/pad_1" | "description_inner_panel/description_stack_panel/description_text_panel_full" | "description_inner_panel/description_stack_panel/description_text_panel_full/description_text_expanded" | "description_inner_panel/description_stack_panel/description_text_panel_full/description_text_expanded/description_label" | "description_inner_panel/description_stack_panel/description_text_panel_full/description_text_expanded/pad_0" | "description_inner_panel/description_stack_panel/description_text_panel_full/description_text_expanded/warning_panel" | "description_inner_panel/description_stack_panel/description_text_panel_full/button_panel" | "description_inner_panel/description_stack_panel/description_text_panel_collapsed" | "description_inner_panel/description_stack_panel/description_text_panel_collapsed/description_text_collapsed" | "description_inner_panel/description_stack_panel/description_text_panel_collapsed/collapsed_show_more_panel" | "description_inner_panel/description_stack_panel/pad_1" | "description_inner_panel/description_stack_panel/divider_panel" | "description_inner_panel/description_stack_panel/divider_panel/divider" | "description_inner_panel/description_stack_panel/pad_2" | "description_inner_panel/description_stack_panel/tags_panel" | "description_inner_panel/description_stack_panel/tags_panel/label_text_panel" | "description_inner_panel/description_stack_panel/tags_panel/label_text_panel/label_text" | "description_inner_panel/description_stack_panel/tags_panel/pad" | "description_inner_panel/description_stack_panel/tags_panel/tag_factory_panel" | "description_inner_panel/description_stack_panel/tags_panel/tag_factory_panel/tags_factory_with_rows" | "description_inner_panel/description_stack_panel/tags_panel/tag_factory_panel/tags_factory" | "description_inner_panel/description_stack_panel/genre_panel" | "description_inner_panel/description_stack_panel/genre_panel/label_text" | "description_inner_panel/description_stack_panel/genre_panel/pad" | "description_inner_panel/description_stack_panel/genre_panel/text_panel" | "description_inner_panel/description_stack_panel/genre_panel/text_panel/text_stack_panel" | "description_inner_panel/description_stack_panel/genre_panel/text_panel/text_stack_panel/genre_button" | "description_inner_panel/description_stack_panel/genre_panel/text_panel/text_stack_panel/pad_0" | "description_inner_panel/description_stack_panel/genre_panel/text_panel/text_stack_panel/slash_divider" | "description_inner_panel/description_stack_panel/genre_panel/text_panel/text_stack_panel/subgenre_button" | "description_inner_panel/description_stack_panel/players_panel" | "description_inner_panel/description_stack_panel/players_panel/label_text" | "description_inner_panel/description_stack_panel/players_panel/pad" | "description_inner_panel/description_stack_panel/players_panel/text_panel" | "description_inner_panel/description_stack_panel/players_panel/text_panel/text_stack_panel" | "description_inner_panel/description_stack_panel/players_panel/text_panel/text_stack_panel/player_count_button_panel" | "description_inner_panel/description_stack_panel/players_panel/text_panel/text_stack_panel/player_count_button_panel/player_count_button_factory" | "description_inner_panel/description_stack_panel/players_panel/text_panel/text_stack_panel/player_count_button_panel/pad" | "description_inner_panel/description_stack_panel/players_panel/text_panel/text_stack_panel/player_count_button_panel/player_count_range_panel" | "description_inner_panel/description_stack_panel/players_panel/text_panel/text_stack_panel/player_count_button_panel/player_count_range_panel/player_count_range_text" | "description_inner_panel/description_stack_panel/players_panel/text_panel/text_stack_panel/note_text" | "description_inner_panel/description_stack_panel/languages_panel" | "description_inner_panel/description_stack_panel/languages_panel/label_text_panel" | "description_inner_panel/description_stack_panel/languages_panel/label_text_panel/label_text" | "description_inner_panel/description_stack_panel/languages_panel/pad" | "description_inner_panel/description_stack_panel/languages_panel/languages_factory" | "description_inner_panel/description_stack_panel/pad_3" | "description_inner_panel/description_stack_panel/show_less_button_panel" | "description_section" | "bundle_thumbnail" | "bundle_thumbnail_section_content" | "bundle_thumbnail_section_content/bundle_thumbnail_grid" | "bundle_thumbnail_section" | "price_panel" | "price_panel/coin_non_sale_price_label" | "price_panel/price_padding" | "price_panel/offer_prompt_panel" | "price_panel/offer_prompt_panel/offer_status_text" | "price_panel/padding_3" | "price_panel/coin_panel" | "price_panel/coin_panel/offer_coin_icon" | "rating_and_coins_panel" | "rating_and_coins_panel/rating_panel" | "rating_and_coins_panel/rating_padding_coin" | "rating_and_coins_panel/price_panel" | "bundle_offer_texture" | "bundle_offer_texture/texture" | "bundle_offer_texture/texture/border" | "bundle_offer_info" | "bundle_offer_info/top_padding" | "bundle_offer_info/offer_title_and_author_panel" | "bundle_offer_info/glyph_section" | "bundle_offer_info/glyph_description_padding" | "bundle_offer_info/description_panel" | "bundle_offer_info/description_padding" | "bundle_offer_info/description_padding_bottom" | "bundle_offer_info/rating_and_price_panel" | "bundle_offer_info/bottom_padding" | "bundle_offer_summary_grid_item_content" | "bundle_offer_summary_grid_item_content/bundle_offer_pdp_panel" | "bundle_offer_summary_grid_item_content/bundle_offer_pdp_panel/focus_border" | "bundle_offer_summary_grid_item_content/bundle_offer_pdp_panel/bundle_offer_content_panel" | "bundle_offer_summary_grid_item_content/bundle_offer_pdp_panel/bundle_offer_content_panel/key_art" | "bundle_offer_summary_grid_item_content/bundle_offer_pdp_panel/bundle_offer_content_panel/mid_padding" | "bundle_offer_summary_grid_item_content/bundle_offer_pdp_panel/bundle_offer_content_panel/info" | "bundle_offer_summary_grid_item_content/bundle_offer_pdp_panel/bundle_offer_content_panel/right_padding" | "bundle_offer_summary_grid_item" | "bundle_offer_summary_grid_item/bundle_offer_summary_button" | "bundle_offer_content_section" | "bundle_offer_content_section/bundle_grid" | "bundle_summary_section_panel" | "bundle_summary_section_panel/bundle_summary_section" | "bundle_summary_section_panel/bundle_summary_section/bundle_header_and_thumnails_section" | "bundle_summary_section_panel/bundle_summary_section/mid_padding" | "bundle_summary_section_panel/bundle_summary_section/bundle_offers_info_section" | "bundle_summary_section_panel/bundle_summary_section/mid_padding_2" | "bundle_summary_section_panel/bundle_summary_section/interact_panel" | "bundle_summary_section_panel/bundle_summary_section/interact_panel/bundle_interact" | "bundle_summary_section_panel/divider_3" | "pack_icon_and_coin_section" | "pack_icon_and_coin_section/sales_banner_panel" | "pack_icon_and_coin_section/sales_banner_panel/sales_banner" | "pack_icon_and_coin_section/pack_icons_panel" | "pack_icon_and_coin_section/pack_icons_panel/padding" | "pack_icon_and_coin_section/pack_icons_panel/pack_icons_panel" | "pack_icon_and_coin_section/pack_icons_and_coin_padding" | "pack_icon_and_coin_section/price_panel" | "bundle_upsell_offer_info" | "bundle_upsell_offer_info/bundle_title" | "bundle_upsell_offer_info/other_bundle_packs_label" | "bundle_upsell_offer_info/mid_padding" | "bundle_upsell_offer_info/pack_icon_and_coin_section" | "bundle_upsell_offer_content" | "bundle_upsell_offer_content/bundle_offer_info" | "bundle_upsell_offer_content/bundle_offer_info/focus_border" | "bundle_upsell_offer_content/bundle_offer_info/bundle_offer_content_panel" | "bundle_upsell_offer_content/bundle_offer_info/bundle_offer_content_panel/thumbnail_art" | "bundle_upsell_offer_content/bundle_offer_info/bundle_offer_content_panel/info" | "bundle_upsell_offer_content/bundle_offer_info/bundle_offer_content_panel/right_padding" | "bundle_upsell_offer_content/bundle_offer_info/progress_loading" | "bundle_upsell_offer" | "bundle_upsell_offer/bundle_upsell_grid_button" | "bundle_upsell_offers_panel" | "bundle_upsell_offers_panel/single_bundle_upsell_offer" | "bundle_upsell_offers_panel/bundle_upsell_grid" | "bundle_upsell_section_panel" | "bundle_upsell_section_panel/bundle_upsell_section" | "bundle_upsell_section_panel/bundle_upsell_section/bundle_upsell_section_content" | "bundle_upsell_section_panel/bundle_upsell_section/bundle_upsell_section_content/bundle_header" | "bundle_upsell_section_panel/bundle_upsell_section/bundle_upsell_section_content/bundle_upsell_offers_panel" | "bundle_upsell_section_panel/bundle_upsell_section/bundle_upsell_section_content/progress_loading_panel" | "bundle_upsell_section_panel/bundle_upsell_section/bundle_upsell_section_content/progress_loading_panel/progress_loading" | "bundle_upsell_section_panel/divider_3" | "pdp_screen" | "mashup_screen_content" | "mashup_screen_content/header" | "mashup_screen_content/popup_dialog_factory" | "mashup_screen_main" | "mashup_screen_main/pack_content" | "mashup_screen_main/progress_loading";