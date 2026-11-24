import type { DefineComponent } from 'vue';

export interface ChatMinusBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusBroken: DefineComponent<ChatMinusBrokenProps>;

export default ChatMinusBroken;
export { ChatMinusBroken };
