import type { DefineComponent } from 'vue';

export interface ChatTextOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextOff: DefineComponent<ChatTextOffProps>;

export default ChatTextOff;
export { ChatTextOff };
