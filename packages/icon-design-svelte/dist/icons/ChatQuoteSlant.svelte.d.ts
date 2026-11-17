import { SvelteComponent } from 'svelte';

export interface ChatQuoteSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuoteSlant extends SvelteComponent<ChatQuoteSlantProps> {}
