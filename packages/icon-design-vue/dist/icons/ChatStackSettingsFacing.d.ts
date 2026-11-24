import type { DefineComponent } from 'vue';

export interface ChatStackSettingsFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSettingsFacing: DefineComponent<ChatStackSettingsFacingProps>;

export default ChatStackSettingsFacing;
export { ChatStackSettingsFacing };
