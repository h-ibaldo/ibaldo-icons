import { SvelteComponent } from 'svelte';

export interface ChatStackReplyAllLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyAllLayered extends SvelteComponent<ChatStackReplyAllLayeredProps> {}
