import type { DefineComponent } from 'vue';

export interface ChatEqualsSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEqualsSharp: DefineComponent<ChatEqualsSharpProps>;

export default ChatEqualsSharp;
export { ChatEqualsSharp };
