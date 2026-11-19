import type { DefineComponent } from 'vue';

export interface ChatSunBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSunBroken: DefineComponent<ChatSunBrokenProps>;

export default ChatSunBroken;
export { ChatSunBroken };
