import type { DefineComponent } from 'vue';

export interface ChatStackForwardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackForward: DefineComponent<ChatStackForwardProps>;

export default ChatStackForward;
export { ChatStackForward };
