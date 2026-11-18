import { SvelteComponent } from 'svelte';

export interface ChatStackReplyLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyLayered extends SvelteComponent<ChatStackReplyLayeredProps> {}
