import type { DefineComponent } from 'vue';

export interface ChatDollarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDollar: DefineComponent<ChatDollarProps>;

export default ChatDollar;
export { ChatDollar };
