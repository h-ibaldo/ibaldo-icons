import type { DefineComponent } from 'vue';

export interface ChatAlertRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatAlertRound: DefineComponent<ChatAlertRoundProps>;

export default ChatAlertRound;
export { ChatAlertRound };
