import type { DefineComponent } from 'vue';

export interface ChatStackSettingsNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsNotch: DefineComponent<ChatStackSettingsNotchProps>;

export default ChatStackSettingsNotch;
export { ChatStackSettingsNotch };
