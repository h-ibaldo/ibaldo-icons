import type { DefineComponent } from 'vue';

export interface ChatQuoteBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuoteBoxy: DefineComponent<ChatQuoteBoxyProps>;

export default ChatQuoteBoxy;
export { ChatQuoteBoxy };
