import type { DefineComponent } from 'vue';

export interface ChatVideoBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatVideoBroken: DefineComponent<ChatVideoBrokenProps>;

export default ChatVideoBroken;
export { ChatVideoBroken };
