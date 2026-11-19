import type { DefineComponent } from 'vue';

export interface ChatInfoBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatInfoBroken: DefineComponent<ChatInfoBrokenProps>;

export default ChatInfoBroken;
export { ChatInfoBroken };
