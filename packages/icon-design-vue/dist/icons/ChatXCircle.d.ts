import type { DefineComponent } from 'vue';

export interface ChatXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCircle: DefineComponent<ChatXCircleProps>;

export default ChatXCircle;
export { ChatXCircle };
