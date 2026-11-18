import { SvelteComponent } from 'svelte';

export interface ChatStackForwardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackForward extends SvelteComponent<ChatStackForwardProps> {}
