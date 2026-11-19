import type { DefineComponent } from 'vue';

export interface ChatEyeBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEyeBoxy: DefineComponent<ChatEyeBoxyProps>;

export default ChatEyeBoxy;
export { ChatEyeBoxy };
