import type { DefineComponent } from 'vue';

export interface ChatTriangleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTriangleRound: DefineComponent<ChatTriangleRoundProps>;

export default ChatTriangleRound;
export { ChatTriangleRound };
