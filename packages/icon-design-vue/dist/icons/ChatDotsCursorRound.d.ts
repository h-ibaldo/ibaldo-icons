import type { DefineComponent } from 'vue';

export interface ChatDotsCursorRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsCursorRound: DefineComponent<ChatDotsCursorRoundProps>;

export default ChatDotsCursorRound;
export { ChatDotsCursorRound };
