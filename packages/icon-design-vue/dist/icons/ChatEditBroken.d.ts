import type { DefineComponent } from 'vue';

export interface ChatEditBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEditBroken: DefineComponent<ChatEditBrokenProps>;

export default ChatEditBroken;
export { ChatEditBroken };
