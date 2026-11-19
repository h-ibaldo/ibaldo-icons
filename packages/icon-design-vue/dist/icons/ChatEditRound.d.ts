import type { DefineComponent } from 'vue';

export interface ChatEditRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEditRound: DefineComponent<ChatEditRoundProps>;

export default ChatEditRound;
export { ChatEditRound };
