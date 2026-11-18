import { SvelteComponent } from 'svelte';

export interface ChatStackLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLayered extends SvelteComponent<ChatStackLayeredProps> {}
