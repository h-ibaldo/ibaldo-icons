import type { DefineComponent } from 'vue';

export interface ChatStackXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackX: DefineComponent<ChatStackXProps>;

export default ChatStackX;
export { ChatStackX };
