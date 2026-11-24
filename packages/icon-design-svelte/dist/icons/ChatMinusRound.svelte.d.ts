import { SvelteComponent } from 'svelte';

export interface ChatMinusRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusRound extends SvelteComponent<ChatMinusRoundProps> {}
