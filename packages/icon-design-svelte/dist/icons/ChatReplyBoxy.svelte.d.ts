import { SvelteComponent } from 'svelte';

export interface ChatReplyBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyBoxy extends SvelteComponent<ChatReplyBoxyProps> {}
