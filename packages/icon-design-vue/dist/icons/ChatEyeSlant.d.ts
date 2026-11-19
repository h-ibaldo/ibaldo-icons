import type { DefineComponent } from 'vue';

export interface ChatEyeSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEyeSlant: DefineComponent<ChatEyeSlantProps>;

export default ChatEyeSlant;
export { ChatEyeSlant };
