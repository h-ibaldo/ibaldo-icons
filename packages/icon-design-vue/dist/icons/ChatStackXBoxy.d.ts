import type { DefineComponent } from 'vue';

export interface ChatStackXBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackXBoxy: DefineComponent<ChatStackXBoxyProps>;

export default ChatStackXBoxy;
export { ChatStackXBoxy };
