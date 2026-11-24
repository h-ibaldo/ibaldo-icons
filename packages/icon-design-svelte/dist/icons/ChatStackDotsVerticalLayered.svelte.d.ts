import { SvelteComponent } from 'svelte';

export interface ChatStackDotsVerticalLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsVerticalLayered extends SvelteComponent<ChatStackDotsVerticalLayeredProps> {}
