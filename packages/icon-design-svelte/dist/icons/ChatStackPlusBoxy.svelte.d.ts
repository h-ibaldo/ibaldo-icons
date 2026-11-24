import { SvelteComponent } from 'svelte';

export interface ChatStackPlusBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackPlusBoxy extends SvelteComponent<ChatStackPlusBoxyProps> {}
