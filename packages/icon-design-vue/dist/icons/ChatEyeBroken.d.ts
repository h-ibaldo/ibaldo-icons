import type { DefineComponent } from 'vue';

export interface ChatEyeBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEyeBroken: DefineComponent<ChatEyeBrokenProps>;

export default ChatEyeBroken;
export { ChatEyeBroken };
