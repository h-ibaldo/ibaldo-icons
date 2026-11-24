import type { DefineComponent } from 'vue';

export interface ChatStackPlusBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusBoxy: DefineComponent<ChatStackPlusBoxyProps>;

export default ChatStackPlusBoxy;
export { ChatStackPlusBoxy };
