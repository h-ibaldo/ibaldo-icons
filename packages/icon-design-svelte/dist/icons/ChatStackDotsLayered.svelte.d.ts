import { SvelteComponent } from 'svelte';

export interface ChatStackDotsLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsLayered extends SvelteComponent<ChatStackDotsLayeredProps> {}
