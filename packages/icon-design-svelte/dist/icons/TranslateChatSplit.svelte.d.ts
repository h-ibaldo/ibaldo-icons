import { SvelteComponent } from 'svelte';

export interface TranslateChatSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TranslateChatSplit extends SvelteComponent<TranslateChatSplitProps> {}
