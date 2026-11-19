import type { DefineComponent } from 'vue';

export interface ChatPlusBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusBoxy: DefineComponent<ChatPlusBoxyProps>;

export default ChatPlusBoxy;
export { ChatPlusBoxy };
