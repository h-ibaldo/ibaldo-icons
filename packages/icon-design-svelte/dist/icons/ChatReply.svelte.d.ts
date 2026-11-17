import { SvelteComponent } from 'svelte';

export interface ChatReplyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReply extends SvelteComponent<ChatReplyProps> {}
