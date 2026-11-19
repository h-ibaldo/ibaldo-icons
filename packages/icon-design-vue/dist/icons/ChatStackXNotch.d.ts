import type { DefineComponent } from 'vue';

export interface ChatStackXNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackXNotch: DefineComponent<ChatStackXNotchProps>;

export default ChatStackXNotch;
export { ChatStackXNotch };
