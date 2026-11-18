import { SvelteComponent } from 'svelte';

export interface ChatStackEditLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackEditLayered extends SvelteComponent<ChatStackEditLayeredProps> {}
