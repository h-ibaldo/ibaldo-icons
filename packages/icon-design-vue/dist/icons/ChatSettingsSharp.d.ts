import type { DefineComponent } from 'vue';

export interface ChatSettingsSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSettingsSharp: DefineComponent<ChatSettingsSharpProps>;

export default ChatSettingsSharp;
export { ChatSettingsSharp };
