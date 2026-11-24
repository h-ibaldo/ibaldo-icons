import type { DefineComponent } from 'vue';

export interface ChatTextLargeFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextLargeFlat: DefineComponent<ChatTextLargeFlatProps>;

export default ChatTextLargeFlat;
export { ChatTextLargeFlat };
