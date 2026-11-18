import { SvelteComponent } from 'svelte';

export interface ChatDollarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDollar extends SvelteComponent<ChatDollarProps> {}
