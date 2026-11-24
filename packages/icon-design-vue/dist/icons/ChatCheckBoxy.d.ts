import type { DefineComponent } from 'vue';

export interface ChatCheckBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckBoxy: DefineComponent<ChatCheckBoxyProps>;

export default ChatCheckBoxy;
export { ChatCheckBoxy };
