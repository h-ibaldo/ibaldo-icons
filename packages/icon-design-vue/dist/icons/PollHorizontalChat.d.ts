import type { DefineComponent } from 'vue';

export interface PollHorizontalChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollHorizontalChat: DefineComponent<PollHorizontalChatProps>;

export default PollHorizontalChat;
export { PollHorizontalChat };
