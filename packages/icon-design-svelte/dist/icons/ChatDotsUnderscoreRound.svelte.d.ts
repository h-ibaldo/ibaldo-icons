import { SvelteComponent } from 'svelte';

export interface ChatDotsUnderscoreRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsUnderscoreRound extends SvelteComponent<ChatDotsUnderscoreRoundProps> {}
