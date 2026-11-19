import type { DefineComponent } from 'vue';

export interface ChatLaughProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLaugh: DefineComponent<ChatLaughProps>;

export default ChatLaugh;
export { ChatLaugh };
