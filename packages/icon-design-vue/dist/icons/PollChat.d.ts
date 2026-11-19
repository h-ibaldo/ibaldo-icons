import type { DefineComponent } from 'vue';

export interface PollChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollChat: DefineComponent<PollChatProps>;

export default PollChat;
export { PollChat };
