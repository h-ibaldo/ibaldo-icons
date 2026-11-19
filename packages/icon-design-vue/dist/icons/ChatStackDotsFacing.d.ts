import type { DefineComponent } from 'vue';

export interface ChatStackDotsFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsFacing: DefineComponent<ChatStackDotsFacingProps>;

export default ChatStackDotsFacing;
export { ChatStackDotsFacing };
