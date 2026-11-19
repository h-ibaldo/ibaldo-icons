import type { DefineComponent } from 'vue';

export interface ChatStackReplyNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyNotch: DefineComponent<ChatStackReplyNotchProps>;

export default ChatStackReplyNotch;
export { ChatStackReplyNotch };
