import { SvelteComponent } from 'svelte';

export interface ChatHashRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHashRound extends SvelteComponent<ChatHashRoundProps> {}
