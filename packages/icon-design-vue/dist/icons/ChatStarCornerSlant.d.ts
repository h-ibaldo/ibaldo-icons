import type { DefineComponent } from 'vue';

export interface ChatStarCornerSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStarCornerSlant: DefineComponent<ChatStarCornerSlantProps>;

export default ChatStarCornerSlant;
export { ChatStarCornerSlant };
