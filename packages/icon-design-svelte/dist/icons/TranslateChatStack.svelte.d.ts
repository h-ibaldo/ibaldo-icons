import { SvelteComponent } from 'svelte';

export interface TranslateChatStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TranslateChatStack extends SvelteComponent<TranslateChatStackProps> {}
