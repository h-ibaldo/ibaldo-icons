import { SvelteComponent } from 'svelte';

export interface ChatStackEditSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackEditSlant extends SvelteComponent<ChatStackEditSlantProps> {}
