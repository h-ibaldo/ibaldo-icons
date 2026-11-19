import type { DefineComponent } from 'vue';

export interface TranslateChatStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TranslateChatStack: DefineComponent<TranslateChatStackProps>;

export default TranslateChatStack;
export { TranslateChatStack };
