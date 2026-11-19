import type { DefineComponent } from 'vue';

export interface ChatStackTypingNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingNotch: DefineComponent<ChatStackTypingNotchProps>;

export default ChatStackTypingNotch;
export { ChatStackTypingNotch };
