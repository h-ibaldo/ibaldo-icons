import type { DefineComponent } from 'vue';

export interface ChatStackCheckNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckNotch: DefineComponent<ChatStackCheckNotchProps>;

export default ChatStackCheckNotch;
export { ChatStackCheckNotch };
