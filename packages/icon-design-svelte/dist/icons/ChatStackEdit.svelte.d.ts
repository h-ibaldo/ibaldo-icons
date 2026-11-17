import { SvelteComponent } from 'svelte';

export interface ChatStackEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackEdit extends SvelteComponent<ChatStackEditProps> {}
