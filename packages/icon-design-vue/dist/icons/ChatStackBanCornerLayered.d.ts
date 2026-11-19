import type { DefineComponent } from 'vue';

export interface ChatStackBanCornerLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackBanCornerLayered: DefineComponent<ChatStackBanCornerLayeredProps>;

export default ChatStackBanCornerLayered;
export { ChatStackBanCornerLayered };
