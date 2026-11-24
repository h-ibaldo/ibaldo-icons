import type { DefineComponent } from 'vue';

export interface ChatStackInfoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackInfo: DefineComponent<ChatStackInfoProps>;

export default ChatStackInfo;
export { ChatStackInfo };
