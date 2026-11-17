import { SvelteComponent } from 'svelte';

export interface ChatReplySlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplySlant extends SvelteComponent<ChatReplySlantProps> {}
