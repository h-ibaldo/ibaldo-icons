import type { DefineComponent } from 'vue';

export interface ChatEqualsBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEqualsBoxy: DefineComponent<ChatEqualsBoxyProps>;

export default ChatEqualsBoxy;
export { ChatEqualsBoxy };
