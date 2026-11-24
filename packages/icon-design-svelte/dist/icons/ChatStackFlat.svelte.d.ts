import { SvelteComponent } from 'svelte';

export interface ChatStackFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackFlat extends SvelteComponent<ChatStackFlatProps> {}
