import { SvelteComponent } from 'svelte';

export interface ChatStackReplyAllBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyAllBoxy extends SvelteComponent<ChatStackReplyAllBoxyProps> {}
