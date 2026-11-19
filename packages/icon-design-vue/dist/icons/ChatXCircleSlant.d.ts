import type { DefineComponent } from 'vue';

export interface ChatXCircleSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCircleSlant: DefineComponent<ChatXCircleSlantProps>;

export default ChatXCircleSlant;
export { ChatXCircleSlant };
