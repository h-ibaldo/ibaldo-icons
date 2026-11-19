import type { DefineComponent } from 'vue';

export interface ChatEditBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEditBoxy: DefineComponent<ChatEditBoxyProps>;

export default ChatEditBoxy;
export { ChatEditBoxy };
