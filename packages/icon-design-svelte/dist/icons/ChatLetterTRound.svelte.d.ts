import { SvelteComponent } from 'svelte';

export interface ChatLetterTRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLetterTRound extends SvelteComponent<ChatLetterTRoundProps> {}
