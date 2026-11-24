import type { DefineComponent } from 'vue';

export interface ChatEqualsBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEqualsBroken: DefineComponent<ChatEqualsBrokenProps>;

export default ChatEqualsBroken;
export { ChatEqualsBroken };
