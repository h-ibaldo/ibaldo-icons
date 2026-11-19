import type { DefineComponent } from 'vue';

export interface ChatStackHeartBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartBoxy: DefineComponent<ChatStackHeartBoxyProps>;

export default ChatStackHeartBoxy;
export { ChatStackHeartBoxy };
