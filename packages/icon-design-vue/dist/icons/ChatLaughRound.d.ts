import type { DefineComponent } from 'vue';

export interface ChatLaughRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLaughRound: DefineComponent<ChatLaughRoundProps>;

export default ChatLaughRound;
export { ChatLaughRound };
