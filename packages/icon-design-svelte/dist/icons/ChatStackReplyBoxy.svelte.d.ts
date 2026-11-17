import { SvelteComponent } from 'svelte';

export interface ChatStackReplyBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyBoxy extends SvelteComponent<ChatStackReplyBoxyProps> {}
