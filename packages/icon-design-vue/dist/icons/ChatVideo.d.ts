import type { DefineComponent } from 'vue';

export interface ChatVideoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatVideo: DefineComponent<ChatVideoProps>;

export default ChatVideo;
export { ChatVideo };
