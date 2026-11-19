import type { DefineComponent } from 'vue';

export interface ChatSettingsTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSettingsTooltip: DefineComponent<ChatSettingsTooltipProps>;

export default ChatSettingsTooltip;
export { ChatSettingsTooltip };
