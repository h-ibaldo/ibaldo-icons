import { SvelteComponent } from 'svelte';

export interface ChatStackInfoLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackInfoLayered extends SvelteComponent<ChatStackInfoLayeredProps> {}
