import type { DefineComponent } from 'vue';

export interface ChatStackSettingsBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsBoxy: DefineComponent<ChatStackSettingsBoxyProps>;

export default ChatStackSettingsBoxy;
export { ChatStackSettingsBoxy };
