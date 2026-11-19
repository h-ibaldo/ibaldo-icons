import type { DefineComponent } from 'vue';

export interface ChatForwardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForward: DefineComponent<ChatForwardProps>;

export default ChatForward;
export { ChatForward };
