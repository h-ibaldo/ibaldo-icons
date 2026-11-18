import { SvelteComponent } from 'svelte';

export interface ChatDollarRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDollarRound extends SvelteComponent<ChatDollarRoundProps> {}
