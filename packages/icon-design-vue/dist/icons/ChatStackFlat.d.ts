import type { DefineComponent } from 'vue';

export interface ChatStackFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackFlat: DefineComponent<ChatStackFlatProps>;

export default ChatStackFlat;
export { ChatStackFlat };
