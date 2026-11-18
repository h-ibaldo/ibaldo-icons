import { SvelteComponent } from 'svelte';

export interface ChatHeartRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHeartRound extends SvelteComponent<ChatHeartRoundProps> {}
