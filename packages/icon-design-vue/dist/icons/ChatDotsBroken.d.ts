import type { DefineComponent } from 'vue';

export interface ChatDotsBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsBroken: DefineComponent<ChatDotsBrokenProps>;

export default ChatDotsBroken;
export { ChatDotsBroken };
