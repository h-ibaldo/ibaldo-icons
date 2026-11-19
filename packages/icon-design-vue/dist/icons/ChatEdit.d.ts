import type { DefineComponent } from 'vue';

export interface ChatEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEdit: DefineComponent<ChatEditProps>;

export default ChatEdit;
export { ChatEdit };
