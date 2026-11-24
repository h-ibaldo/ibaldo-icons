import type { DefineComponent } from 'vue';

export interface ChatStackLaughNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackLaughNotch: DefineComponent<ChatStackLaughNotchProps>;

export default ChatStackLaughNotch;
export { ChatStackLaughNotch };
