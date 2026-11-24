import type { DefineComponent } from 'vue';

export interface ChatImageSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatImageSharp: DefineComponent<ChatImageSharpProps>;

export default ChatImageSharp;
export { ChatImageSharp };
