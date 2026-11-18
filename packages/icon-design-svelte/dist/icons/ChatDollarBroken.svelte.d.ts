import { SvelteComponent } from 'svelte';

export interface ChatDollarBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDollarBroken extends SvelteComponent<ChatDollarBrokenProps> {}
