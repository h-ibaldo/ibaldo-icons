import type { DefineComponent } from 'vue';

export interface ChatStackHeartSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartSlant: DefineComponent<ChatStackHeartSlantProps>;

export default ChatStackHeartSlant;
export { ChatStackHeartSlant };
