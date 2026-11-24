import { SvelteComponent } from 'svelte';

export interface ChatStackReplySlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplySlant extends SvelteComponent<ChatStackReplySlantProps> {}
