import { SvelteComponent } from 'svelte';

export interface ChatStackDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDots extends SvelteComponent<ChatStackDotsProps> {}
