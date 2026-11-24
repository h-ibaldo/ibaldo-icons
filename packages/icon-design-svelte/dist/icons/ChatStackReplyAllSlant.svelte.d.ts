import { SvelteComponent } from 'svelte';

export interface ChatStackReplyAllSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyAllSlant extends SvelteComponent<ChatStackReplyAllSlantProps> {}
