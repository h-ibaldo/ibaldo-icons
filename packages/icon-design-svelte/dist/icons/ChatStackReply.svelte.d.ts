import { SvelteComponent } from 'svelte';

export interface ChatStackReplyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReply extends SvelteComponent<ChatStackReplyProps> {}
