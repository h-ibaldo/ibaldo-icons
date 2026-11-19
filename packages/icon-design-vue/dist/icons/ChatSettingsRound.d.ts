import type { DefineComponent } from 'vue';

export interface ChatSettingsRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSettingsRound: DefineComponent<ChatSettingsRoundProps>;

export default ChatSettingsRound;
export { ChatSettingsRound };
