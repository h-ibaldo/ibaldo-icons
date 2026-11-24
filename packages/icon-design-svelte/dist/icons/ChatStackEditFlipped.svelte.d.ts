import { SvelteComponent } from 'svelte';

export interface ChatStackEditFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackEditFlipped extends SvelteComponent<ChatStackEditFlippedProps> {}
