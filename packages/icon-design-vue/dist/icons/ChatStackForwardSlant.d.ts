import type { DefineComponent } from 'vue';

export interface ChatStackForwardSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardSlant: DefineComponent<ChatStackForwardSlantProps>;

export default ChatStackForwardSlant;
export { ChatStackForwardSlant };
