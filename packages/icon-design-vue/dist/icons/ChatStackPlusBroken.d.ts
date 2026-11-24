import type { DefineComponent } from 'vue';

export interface ChatStackPlusBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusBroken: DefineComponent<ChatStackPlusBrokenProps>;

export default ChatStackPlusBroken;
export { ChatStackPlusBroken };
