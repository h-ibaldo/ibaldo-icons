import type { DefineComponent } from 'vue';

export interface ChatStackSettingsTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsTooltip: DefineComponent<ChatStackSettingsTooltipProps>;

export default ChatStackSettingsTooltip;
export { ChatStackSettingsTooltip };
