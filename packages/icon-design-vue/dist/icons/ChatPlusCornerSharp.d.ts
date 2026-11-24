import type { DefineComponent } from 'vue';

export interface ChatPlusCornerSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerSharp: DefineComponent<ChatPlusCornerSharpProps>;

export default ChatPlusCornerSharp;
export { ChatPlusCornerSharp };
