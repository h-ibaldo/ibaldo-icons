import { SvelteComponent } from 'svelte';

export interface ChatStackTextStaggeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTextStaggered extends SvelteComponent<ChatStackTextStaggeredProps> {}
