import { SvelteComponent } from 'svelte';

export interface ChatReplyAllSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyAllSlant extends SvelteComponent<ChatReplyAllSlantProps> {}
