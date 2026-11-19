import type { DefineComponent } from 'vue';

export interface ChatStackSettingsSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsSlant: DefineComponent<ChatStackSettingsSlantProps>;

export default ChatStackSettingsSlant;
export { ChatStackSettingsSlant };
