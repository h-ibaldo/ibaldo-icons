import type { DefineComponent } from 'vue';

export interface ChatLettersBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLettersBroken: DefineComponent<ChatLettersBrokenProps>;

export default ChatLettersBroken;
export { ChatLettersBroken };
