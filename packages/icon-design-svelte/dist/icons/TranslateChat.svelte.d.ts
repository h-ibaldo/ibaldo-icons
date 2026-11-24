import { SvelteComponent } from 'svelte';

export interface TranslateChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TranslateChat extends SvelteComponent<TranslateChatProps> {}
