import type { DefineComponent } from 'vue';

export interface ChatSettingsWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSettingsWide: DefineComponent<ChatSettingsWideProps>;

export default ChatSettingsWide;
export { ChatSettingsWide };
