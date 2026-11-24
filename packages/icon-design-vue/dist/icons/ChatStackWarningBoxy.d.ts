import type { DefineComponent } from 'vue';

export interface ChatStackWarningBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackWarningBoxy: DefineComponent<ChatStackWarningBoxyProps>;

export default ChatStackWarningBoxy;
export { ChatStackWarningBoxy };
