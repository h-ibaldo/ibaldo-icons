import type { DefineComponent } from 'vue';

export interface FaqChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FaqChat: DefineComponent<FaqChatProps>;

export default FaqChat;
export { FaqChat };
