import type { DefineComponent } from 'vue';

export interface ChatStackImageNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackImageNotch: DefineComponent<ChatStackImageNotchProps>;

export default ChatStackImageNotch;
export { ChatStackImageNotch };
