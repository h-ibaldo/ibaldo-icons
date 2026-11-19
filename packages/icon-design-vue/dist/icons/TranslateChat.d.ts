import type { DefineComponent } from 'vue';

export interface TranslateChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TranslateChat: DefineComponent<TranslateChatProps>;

export default TranslateChat;
export { TranslateChat };
