import type { DefineComponent } from 'vue';

export interface ChatStackAlertBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertBroken: DefineComponent<ChatStackAlertBrokenProps>;

export default ChatStackAlertBroken;
export { ChatStackAlertBroken };
