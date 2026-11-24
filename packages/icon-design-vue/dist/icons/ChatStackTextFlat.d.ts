import type { DefineComponent } from 'vue';

export interface ChatStackTextFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTextFlat: DefineComponent<ChatStackTextFlatProps>;

export default ChatStackTextFlat;
export { ChatStackTextFlat };
