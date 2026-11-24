import { SvelteComponent } from 'svelte';

export interface ChatStackForwardLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackForwardLayered extends SvelteComponent<ChatStackForwardLayeredProps> {}
