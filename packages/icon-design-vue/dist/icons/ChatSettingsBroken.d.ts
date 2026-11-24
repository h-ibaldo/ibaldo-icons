import type { DefineComponent } from 'vue';

export interface ChatSettingsBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSettingsBroken: DefineComponent<ChatSettingsBrokenProps>;

export default ChatSettingsBroken;
export { ChatSettingsBroken };
