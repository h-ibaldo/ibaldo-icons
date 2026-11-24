import type { DefineComponent } from 'vue';

export interface ChatStackImageCornerLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackImageCornerLayered: DefineComponent<ChatStackImageCornerLayeredProps>;

export default ChatStackImageCornerLayered;
export { ChatStackImageCornerLayered };
