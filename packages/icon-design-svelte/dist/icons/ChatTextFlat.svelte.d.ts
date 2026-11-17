import { SvelteComponent } from 'svelte';

export interface ChatTextFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextFlat extends SvelteComponent<ChatTextFlatProps> {}
