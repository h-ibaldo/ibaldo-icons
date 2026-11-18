import { SvelteComponent } from 'svelte';

export interface ChatDotsTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsTall extends SvelteComponent<ChatDotsTallProps> {}
