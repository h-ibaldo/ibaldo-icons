import { SvelteComponent } from 'svelte';

export interface ChatStackStaggeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackStaggered extends SvelteComponent<ChatStackStaggeredProps> {}
