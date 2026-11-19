import type { DefineComponent } from 'vue';

export interface ChatSettingsSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSettingsSlant: DefineComponent<ChatSettingsSlantProps>;

export default ChatSettingsSlant;
export { ChatSettingsSlant };
