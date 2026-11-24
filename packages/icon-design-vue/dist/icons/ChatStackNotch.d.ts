import type { DefineComponent } from 'vue';

export interface ChatStackNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackNotch: DefineComponent<ChatStackNotchProps>;

export default ChatStackNotch;
export { ChatStackNotch };
