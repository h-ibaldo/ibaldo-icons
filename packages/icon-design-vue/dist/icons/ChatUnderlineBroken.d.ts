import type { DefineComponent } from 'vue';

export interface ChatUnderlineBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineBroken: DefineComponent<ChatUnderlineBrokenProps>;

export default ChatUnderlineBroken;
export { ChatUnderlineBroken };
