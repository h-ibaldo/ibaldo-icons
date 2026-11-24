import type { DefineComponent } from 'vue';

export interface BotChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BotChat: DefineComponent<BotChatProps>;

export default BotChat;
export { BotChat };
