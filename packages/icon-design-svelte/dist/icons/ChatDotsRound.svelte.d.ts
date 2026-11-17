import { SvelteComponent } from 'svelte';

export interface ChatDotsRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsRound extends SvelteComponent<ChatDotsRoundProps> {}
