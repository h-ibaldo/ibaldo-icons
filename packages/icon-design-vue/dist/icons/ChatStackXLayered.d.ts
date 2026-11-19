import type { DefineComponent } from 'vue';

export interface ChatStackXLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackXLayered: DefineComponent<ChatStackXLayeredProps>;

export default ChatStackXLayered;
export { ChatStackXLayered };
