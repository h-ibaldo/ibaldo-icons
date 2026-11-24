import { SvelteComponent } from 'svelte';

export interface ChatQuoteRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuoteRound extends SvelteComponent<ChatQuoteRoundProps> {}
