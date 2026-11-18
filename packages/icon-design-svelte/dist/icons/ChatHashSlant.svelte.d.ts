import { SvelteComponent } from 'svelte';

export interface ChatHashSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHashSlant extends SvelteComponent<ChatHashSlantProps> {}
