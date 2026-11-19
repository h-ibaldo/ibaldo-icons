import type { DefineComponent } from 'vue';

export interface ChatStackPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackPlus: DefineComponent<ChatStackPlusProps>;

export default ChatStackPlus;
export { ChatStackPlus };
