import { SvelteComponent } from 'svelte';

export interface ChatDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDots extends SvelteComponent<ChatDotsProps> {}
