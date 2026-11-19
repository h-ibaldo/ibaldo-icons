import type { DefineComponent } from 'vue';

export interface ChatEyeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEye: DefineComponent<ChatEyeProps>;

export default ChatEye;
export { ChatEye };
