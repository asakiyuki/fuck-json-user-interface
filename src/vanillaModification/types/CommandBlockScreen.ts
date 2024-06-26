export type CommandBlockScreenTypes = "plus_icon" | "paste_icon" | "plus_button" | "paste_button" | "icon_dropdown_toggle_button_state_content" | "icon_dropdown_toggle_button_state_content/icon_panel" | "icon_dropdown_toggle_button_state_content/icon_panel/dropdown_contents_icon" | "icon_dropdown_toggle_button_state_content/spacer" | "icon_dropdown_toggle_button_state_content/label_panel" | "icon_dropdown_toggle_button_state_content/label_panel/label" | "icon_dropdown_toggle_button_state_content/arrow_panel" | "icon_dropdown_toggle_button_state_content/arrow_panel/arrow" | "command_block_multiline_text_edit_box" | "command_block_text_edit_box" | "command_block_helper_stack" | "command_block_helper_stack/offset" | "command_block_helper_stack/text_" | "previous_command_block_info_stack" | "previous_command_block_info_stack/offset" | "previous_command_block_info_stack/start_label" | "previous_command_block_info_stack/offset1" | "previous_command_block_info_stack/start_label_dynamic_text" | "cancel_button" | "blocktype_dropdown_content" | "block_type_panel" | "condition_dropdown_content" | "condition_mode_panel" | "redstone_dropdown_content" | "redstone_mode_panel" | "left_scrolling_panel" | "left_scroll_panel_content" | "left_scroll_panel_content/content_stack_panel" | "left_scroll_panel_content/content_stack_panel/offset1" | "left_scroll_panel_content/content_stack_panel/offset2" | "left_scroll_panel_content/content_stack_panel/offset2/hover_note_text" | "left_scroll_panel_content/content_stack_panel/offset3" | "left_scroll_panel_content/content_stack_panel/block_type_mode_panel" | "left_scroll_panel_content/content_stack_panel/offset4" | "left_scroll_panel_content/content_stack_panel/condition_mode_panel" | "left_scroll_panel_content/content_stack_panel/offset5" | "left_scroll_panel_content/content_stack_panel/redstone_mode_panel" | "left_scroll_panel_content/content_stack_panel/offset_execute_on_first_tick" | "left_scroll_panel_content/content_stack_panel/option_label_execute_on_first_tick" | "left_scroll_panel_content/content_stack_panel/execute_on_first_tick_toggle" | "left_scroll_panel_content/content_stack_panel/offset_tick_delay" | "left_scroll_panel_content/content_stack_panel/option_label_tick_delay" | "left_scroll_panel_content/content_stack_panel/tick_delay_text" | "left_scroll_panel_content/content_stack_panel/offset7" | "left_scroll_panel_content/content_stack_panel/cancel" | "left_scroll_panel_content/content_stack_panel/offset8" | "left_divider_content" | "left_divider_content/left_scrolling_panel" | "right_scrolling_panel" | "right_scroll_panel_content" | "right_scroll_panel_content/command_block_commands_panel" | "right_scroll_panel_content/command_block_commands_panel/spacer1" | "right_scroll_panel_content/command_block_commands_panel/centering_panel" | "right_scroll_panel_content/command_block_commands_panel/centering_panel/option_label" | "right_scroll_panel_content/command_block_commands_panel/spacer2" | "right_scroll_panel_content/command_block_commands_panel/centering_panel1" | "right_scroll_panel_content/command_block_commands_panel/centering_panel1/command_block_commands_panel" | "right_scroll_panel_content/command_block_commands_panel/centering_panel1/command_block_commands_panel/offset" | "right_scroll_panel_content/command_block_commands_panel/centering_panel1/command_block_commands_panel/offset/command_block_commands_text" | "right_scroll_panel_content/command_block_commands_panel/centering_panel1/command_block_commands_panel/paste_button" | "right_scroll_panel_content/command_block_commands_panel/centering_panel1/command_block_commands_panel/plus_button" | "right_scroll_panel_content/switch_warning_panel" | "right_scroll_panel_content/switch_warning_panel/switch_warning_label" | "right_scroll_panel_content/self_label" | "right_scroll_panel_content/self_label_offset" | "right_scroll_panel_content/nearest_player_label" | "right_scroll_panel_content/nearest_player_label_offset" | "right_scroll_panel_content/random_player_label" | "right_scroll_panel_content/random_player_label_offset" | "right_scroll_panel_content/all_players_label" | "right_scroll_panel_content/all_players_label_offset" | "right_scroll_panel_content/all_entities_label" | "right_scroll_panel_content/all_entities_label_offset" | "right_scroll_panel_content/command_block_previous_output_panel" | "right_scroll_panel_content/command_block_previous_output_panel/previous_output_label_stack_centering_panel" | "right_scroll_panel_content/command_block_previous_output_panel/previous_output_label_stack_centering_panel/previous_output_label_stack" | "right_scroll_panel_content/command_block_previous_output_panel/previous_output_label_stack_centering_panel/previous_output_label_stack/show_output_toggle" | "right_scroll_panel_content/command_block_previous_output_panel/previous_output_label_stack_centering_panel/previous_output_label_stack/option_label" | "right_scroll_panel_content/command_block_previous_output_panel/spacer" | "right_scroll_panel_content/command_block_previous_output_panel/command_output_text_centering_panel" | "right_scroll_panel_content/command_block_previous_output_panel/command_output_text_centering_panel/command_output_text" | "right_scroll_panel_content/previous_block_type_text" | "right_scroll_panel_content/offset4" | "right_scroll_panel_content/previous_conditional_mode_text" | "right_scroll_panel_content/offset5" | "right_scroll_panel_content/previous_redstone_mode_text" | "divider_content" | "divider_content/left_side" | "divider_content/right_side" | "command_block_screen_content" | "command_block_screen_content/background_divider" | "command_block_screen_content/background_divider/bg_image" | "command_block_screen_content/background_divider/dialog_divider" | "command_block_screen_content/background_divider/header_buttons_stack_panel" | "command_block_screen_content/background_divider/header_buttons_stack_panel/paste_button" | "command_block_screen_content/background_divider/header_buttons_stack_panel/close_button_holder" | "command_block_screen_content/background_divider/header_buttons_stack_panel/close_button_holder/close" | "command_block_screen_content/background_divider/header_buttons_stack_panel/close_button_holder/minimize" | "command_block_screen_content/background_divider/header_buttons_stack_panel/close_button_holder/minimize/default" | "command_block_screen_content/background_divider/header_buttons_stack_panel/close_button_holder/minimize/hover" | "command_block_screen_content/background_divider/header_buttons_stack_panel/close_button_holder/minimize/pressed" | "command_block_screen_content/title" | "command_block_screen_content/content" | "command_block_screen_content/maximized_command_block_text" | "right_divider_content" | "right_divider_content/right_scrolling_panel" | "command_block_screen";