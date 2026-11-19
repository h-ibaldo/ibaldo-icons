import type { DefineComponent } from 'vue';

export interface ChatWarningBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatWarningBoxy: DefineComponent<ChatWarningBoxyProps>;

export default ChatWarningBoxy;
export { ChatWarningBoxy };
