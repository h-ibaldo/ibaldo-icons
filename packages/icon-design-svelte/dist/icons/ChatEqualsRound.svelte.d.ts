import { SvelteComponent } from 'svelte';

export interface ChatEqualsRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEqualsRound extends SvelteComponent<ChatEqualsRoundProps> {}
