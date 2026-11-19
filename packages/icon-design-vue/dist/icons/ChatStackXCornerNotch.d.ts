import type { DefineComponent } from 'vue';

export interface ChatStackXCornerNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackXCornerNotch: DefineComponent<ChatStackXCornerNotchProps>;

export default ChatStackXCornerNotch;
export { ChatStackXCornerNotch };
