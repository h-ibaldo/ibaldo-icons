import { SvelteComponent } from 'svelte';

export interface ChatTypingRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTypingRound extends SvelteComponent<ChatTypingRoundProps> {}
