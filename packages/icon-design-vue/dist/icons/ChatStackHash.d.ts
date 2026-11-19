import type { DefineComponent } from 'vue';

export interface ChatStackHashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHash: DefineComponent<ChatStackHashProps>;

export default ChatStackHash;
export { ChatStackHash };
