import type { DefineComponent } from 'vue';

export interface ChatCheckBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckBroken: DefineComponent<ChatCheckBrokenProps>;

export default ChatCheckBroken;
export { ChatCheckBroken };
