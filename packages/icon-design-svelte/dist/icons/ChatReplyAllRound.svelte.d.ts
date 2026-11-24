import { SvelteComponent } from 'svelte';

export interface ChatReplyAllRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyAllRound extends SvelteComponent<ChatReplyAllRoundProps> {}
