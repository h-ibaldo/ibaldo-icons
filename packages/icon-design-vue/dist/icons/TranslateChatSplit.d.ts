import type { DefineComponent } from 'vue';

export interface TranslateChatSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TranslateChatSplit: DefineComponent<TranslateChatSplitProps>;

export default TranslateChatSplit;
export { TranslateChatSplit };
