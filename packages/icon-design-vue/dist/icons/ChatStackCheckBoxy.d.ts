import type { DefineComponent } from 'vue';

export interface ChatStackCheckBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckBoxy: DefineComponent<ChatStackCheckBoxyProps>;

export default ChatStackCheckBoxy;
export { ChatStackCheckBoxy };
