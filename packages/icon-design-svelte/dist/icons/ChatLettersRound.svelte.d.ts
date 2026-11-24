import { SvelteComponent } from 'svelte';

export interface ChatLettersRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLettersRound extends SvelteComponent<ChatLettersRoundProps> {}
