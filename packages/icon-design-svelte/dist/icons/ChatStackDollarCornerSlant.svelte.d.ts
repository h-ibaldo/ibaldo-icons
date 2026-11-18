import { SvelteComponent } from 'svelte';

export interface ChatStackDollarCornerSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDollarCornerSlant extends SvelteComponent<ChatStackDollarCornerSlantProps> {}
