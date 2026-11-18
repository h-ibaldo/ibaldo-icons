import { SvelteComponent } from 'svelte';

export interface ChatStackOffSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOffSlant extends SvelteComponent<ChatStackOffSlantProps> {}
