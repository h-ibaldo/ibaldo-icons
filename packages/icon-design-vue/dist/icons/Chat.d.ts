import type { DefineComponent } from 'vue';

export interface ChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Chat: DefineComponent<ChatProps>;

export default Chat;
export { Chat };
