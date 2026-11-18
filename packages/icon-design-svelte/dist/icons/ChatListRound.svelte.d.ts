import { SvelteComponent } from 'svelte';

export interface ChatListRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatListRound extends SvelteComponent<ChatListRoundProps> {}
