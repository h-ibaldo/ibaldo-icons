import type { DefineComponent } from 'vue';

export interface ChatStackBanCornerNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackBanCornerNotch: DefineComponent<ChatStackBanCornerNotchProps>;

export default ChatStackBanCornerNotch;
export { ChatStackBanCornerNotch };
