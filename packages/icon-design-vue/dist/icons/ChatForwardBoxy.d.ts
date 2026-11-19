import type { DefineComponent } from 'vue';

export interface ChatForwardBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForwardBoxy: DefineComponent<ChatForwardBoxyProps>;

export default ChatForwardBoxy;
export { ChatForwardBoxy };
