import { SvelteComponent } from 'svelte';

export interface ChatReplyAllBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyAllBoxy extends SvelteComponent<ChatReplyAllBoxyProps> {}
