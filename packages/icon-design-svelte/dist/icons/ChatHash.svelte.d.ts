import { SvelteComponent } from 'svelte';

export interface ChatHashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHash extends SvelteComponent<ChatHashProps> {}
