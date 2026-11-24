import type { DefineComponent } from 'vue';

export interface ChatStackHeartNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartNotch: DefineComponent<ChatStackHeartNotchProps>;

export default ChatStackHeartNotch;
export { ChatStackHeartNotch };
