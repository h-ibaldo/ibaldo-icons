import { SvelteComponent } from 'svelte';

export interface ChatDotRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotRound extends SvelteComponent<ChatDotRoundProps> {}
