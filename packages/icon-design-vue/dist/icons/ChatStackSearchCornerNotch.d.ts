import type { DefineComponent } from 'vue';

export interface ChatStackSearchCornerNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSearchCornerNotch: DefineComponent<ChatStackSearchCornerNotchProps>;

export default ChatStackSearchCornerNotch;
export { ChatStackSearchCornerNotch };
