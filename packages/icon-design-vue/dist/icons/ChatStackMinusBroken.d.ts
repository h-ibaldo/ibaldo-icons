import type { DefineComponent } from 'vue';

export interface ChatStackMinusBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusBroken: DefineComponent<ChatStackMinusBrokenProps>;

export default ChatStackMinusBroken;
export { ChatStackMinusBroken };
