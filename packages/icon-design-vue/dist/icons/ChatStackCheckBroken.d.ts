import type { DefineComponent } from 'vue';

export interface ChatStackCheckBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckBroken: DefineComponent<ChatStackCheckBrokenProps>;

export default ChatStackCheckBroken;
export { ChatStackCheckBroken };
