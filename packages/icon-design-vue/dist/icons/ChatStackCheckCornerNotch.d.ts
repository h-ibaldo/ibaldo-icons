import type { DefineComponent } from 'vue';

export interface ChatStackCheckCornerNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckCornerNotch: DefineComponent<ChatStackCheckCornerNotchProps>;

export default ChatStackCheckCornerNotch;
export { ChatStackCheckCornerNotch };
