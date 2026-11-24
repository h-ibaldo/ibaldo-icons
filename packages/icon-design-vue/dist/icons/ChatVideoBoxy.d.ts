import type { DefineComponent } from 'vue';

export interface ChatVideoBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatVideoBoxy: DefineComponent<ChatVideoBoxyProps>;

export default ChatVideoBoxy;
export { ChatVideoBoxy };
