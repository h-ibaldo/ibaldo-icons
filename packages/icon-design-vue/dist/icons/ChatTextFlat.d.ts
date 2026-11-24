import type { DefineComponent } from 'vue';

export interface ChatTextFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextFlat: DefineComponent<ChatTextFlatProps>;

export default ChatTextFlat;
export { ChatTextFlat };
