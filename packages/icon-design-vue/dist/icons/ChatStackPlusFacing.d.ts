import type { DefineComponent } from 'vue';

export interface ChatStackPlusFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusFacing: DefineComponent<ChatStackPlusFacingProps>;

export default ChatStackPlusFacing;
export { ChatStackPlusFacing };
