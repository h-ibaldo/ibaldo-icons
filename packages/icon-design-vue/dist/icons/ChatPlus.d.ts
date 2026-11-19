import type { DefineComponent } from 'vue';

export interface ChatPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlus: DefineComponent<ChatPlusProps>;

export default ChatPlus;
export { ChatPlus };
