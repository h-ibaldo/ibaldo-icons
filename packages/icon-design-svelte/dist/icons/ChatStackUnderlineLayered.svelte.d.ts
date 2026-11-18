import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineLayered extends SvelteComponent<ChatStackUnderlineLayeredProps> {}
