import type { DefineComponent } from 'vue';

export interface ChatSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSettings: DefineComponent<ChatSettingsProps>;

export default ChatSettings;
export { ChatSettings };
