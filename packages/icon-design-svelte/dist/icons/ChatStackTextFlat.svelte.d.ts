import { SvelteComponent } from 'svelte';

export interface ChatStackTextFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTextFlat extends SvelteComponent<ChatStackTextFlatProps> {}
