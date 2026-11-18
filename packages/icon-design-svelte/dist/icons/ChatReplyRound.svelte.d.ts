import { SvelteComponent } from 'svelte';

export interface ChatReplyRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyRound extends SvelteComponent<ChatReplyRoundProps> {}
