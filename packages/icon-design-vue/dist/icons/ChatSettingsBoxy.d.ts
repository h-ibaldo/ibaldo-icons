import type { DefineComponent } from 'vue';

export interface ChatSettingsBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSettingsBoxy: DefineComponent<ChatSettingsBoxyProps>;

export default ChatSettingsBoxy;
export { ChatSettingsBoxy };
