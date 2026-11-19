import type { DefineComponent } from 'vue';

export interface ChatCheckCornerSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerSlant: DefineComponent<ChatCheckCornerSlantProps>;

export default ChatCheckCornerSlant;
export { ChatCheckCornerSlant };
