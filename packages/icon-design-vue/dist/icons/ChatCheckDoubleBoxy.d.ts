import type { DefineComponent } from 'vue';

export interface ChatCheckDoubleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleBoxy: DefineComponent<ChatCheckDoubleBoxyProps>;

export default ChatCheckDoubleBoxy;
export { ChatCheckDoubleBoxy };
