import type { DefineComponent } from 'vue';

export interface ChatStackSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSettings: DefineComponent<ChatStackSettingsProps>;

export default ChatStackSettings;
export { ChatStackSettings };
