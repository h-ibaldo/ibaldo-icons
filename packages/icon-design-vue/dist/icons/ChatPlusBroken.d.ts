import type { DefineComponent } from 'vue';

export interface ChatPlusBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusBroken: DefineComponent<ChatPlusBrokenProps>;

export default ChatPlusBroken;
export { ChatPlusBroken };
