import { SvelteComponent } from 'svelte';

export interface ChatDotsSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsSlant extends SvelteComponent<ChatDotsSlantProps> {}
