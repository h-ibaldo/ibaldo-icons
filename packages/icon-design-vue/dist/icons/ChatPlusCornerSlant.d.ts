import type { DefineComponent } from 'vue';

export interface ChatPlusCornerSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerSlant: DefineComponent<ChatPlusCornerSlantProps>;

export default ChatPlusCornerSlant;
export { ChatPlusCornerSlant };
