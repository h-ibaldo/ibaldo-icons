import type { DefineComponent } from 'vue';

export interface ChatEditSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEditSharp: DefineComponent<ChatEditSharpProps>;

export default ChatEditSharp;
export { ChatEditSharp };
