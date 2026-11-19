import type { DefineComponent } from 'vue';

export interface ChatStackSettingsLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsLayered: DefineComponent<ChatStackSettingsLayeredProps>;

export default ChatStackSettingsLayered;
export { ChatStackSettingsLayered };
