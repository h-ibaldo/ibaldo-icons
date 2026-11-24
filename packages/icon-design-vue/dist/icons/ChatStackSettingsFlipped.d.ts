import type { DefineComponent } from 'vue';

export interface ChatStackSettingsFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsFlipped: DefineComponent<ChatStackSettingsFlippedProps>;

export default ChatStackSettingsFlipped;
export { ChatStackSettingsFlipped };
