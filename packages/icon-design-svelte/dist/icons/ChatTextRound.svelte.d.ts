import { SvelteComponent } from 'svelte';

export interface ChatTextRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextRound extends SvelteComponent<ChatTextRoundProps> {}
