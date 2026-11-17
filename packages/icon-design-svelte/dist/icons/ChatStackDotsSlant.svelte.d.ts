import { SvelteComponent } from 'svelte';

export interface ChatStackDotsSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsSlant extends SvelteComponent<ChatStackDotsSlantProps> {}
